from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from models import *
from database import *
import math

app = FastAPI()

@app.on_event("startup")
def on_startup():
    init_db()

# Dependency
def get_db_session():
    db = next(get_db())
    try:
        return db
    finally:
        pass

def haversine_distance(lat1, lon1, lat2, lon2):
    R = 6371  # Radius of Earth in km
    dLat = math.radians(lat2 - lat1)
    dLon = math.radians(lon2 - lon1)
    a = math.sin(dLat/2)**2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dLon/2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    return R * c

# === ROUTES ===

@app.post("/vehicle-types", response_model=VehicleTypeResponse)
def create_vehicle_type(vehicle_type: VehicleTypeCreate, db: Session = Depends(get_db_session)):
    db_type = VehicleTypeDB(name=vehicle_type.name)
    db.add(db_type)
    db.commit()
    db.refresh(db_type)
    return db_type

@app.get("/vehicle-types", response_model=list[VehicleTypeResponse])
def get_vehicle_types(db: Session = Depends(get_db_session)):
    return db.query(VehicleTypeDB).all()

@app.post("/vehicles", response_model=VehicleResponse)
def register_vehicle(vehicle: VehicleCreate, db: Session = Depends(get_db_session)):
    # Check if vehicle type exists
    vehicle_type = db.query(VehicleTypeDB).filter(VehicleTypeDB.id == vehicle.vehicle_type_id).first()
    if not vehicle_type:
        raise Exception("Invalid vehicle type ID")

    db_vehicle = VehicleDB(**vehicle.dict())
    db.add(db_vehicle)
    db.commit()
    db.refresh(db_vehicle)
    return {
        "id": db_vehicle.id,
        "registration_number": db_vehicle.registration_number,
        "type_name": vehicle_type.name,
        "fuel_capacity": db_vehicle.fuel_capacity,
        "max_range_km": db_vehicle.max_range_km,
        "current_location_lat": db_vehicle.current_location_lat,
        "current_location_lon": db_vehicle.current_location_lon,
        "is_available": db_vehicle.is_available
    }

@app.get("/vehicles", response_model=list[VehicleResponse])
def get_vehicles(db: Session = Depends(get_db_session)):
    vehicles = db.query(VehicleDB).all()
    return [{
        "id": v.id,
        "registration_number": v.registration_number,
        "type_name": v.type.name,
        "fuel_capacity": v.fuel_capacity,
        "max_range_km": v.max_range_km,
        "current_location_lat": v.current_location_lat,
        "current_location_lon": v.current_location_lon,
        "is_available": v.is_available
    } for v in vehicles]

@app.post("/suggest-vehicle")
def suggest_vehicle(route: RouteRequest, db: Session = Depends(get_db_session)):
    
    return {
       "TODO":"AI Based Suggestion"
    }