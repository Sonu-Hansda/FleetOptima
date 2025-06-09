from pydantic import BaseModel
from typing import Optional

# Vehicle Type
class VehicleTypeCreate(BaseModel):
    name: str

class VehicleTypeResponse(BaseModel):
    id: int
    name: str

    class Config:
        from_attributes = True

# Vehicle
class VehicleCreate(BaseModel):
    registration_number: str
    vehicle_type_id: int
    fuel_capacity: float
    max_range_km: float
    current_location_lat: float
    current_location_lon: float
    is_available: bool = True

class VehicleResponse(BaseModel):
    id: int
    registration_number: str
    type_name: str
    fuel_capacity: float
    max_range_km: float
    current_location_lat: float
    current_location_lon: float
    is_available: bool

    class Config:
        from_attributes = True

# Route Request
class RouteRequest(BaseModel):
    start_lat: float
    start_lon: float
    end_lat: float
    end_lon: float
    max_time_minutes: Optional[int] = None