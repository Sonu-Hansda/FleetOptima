from sqlalchemy import create_engine, Column, Integer, String, Float, Boolean, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship, Session

# SQLite Database
SQLALCHEMY_DATABASE_URL = "sqlite:///./logistics.db"

# Create engine
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

# SessionLocal for dependency injection
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class VehicleTypeDB(Base):
    __tablename__ = "vehicle_types"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, nullable=False)

class VehicleDB(Base):
    __tablename__ = "vehicles"
    id = Column(Integer, primary_key=True, index=True)
    registration_number = Column(String, unique=True, nullable=False)
    vehicle_type_id = Column(Integer, ForeignKey("vehicle_types.id"))
    fuel_capacity = Column(Float, nullable=False)
    max_range_km = Column(Float, nullable=False)
    current_location_lat = Column(Float, nullable=False)
    current_location_lon = Column(Float, nullable=False)
    is_available = Column(Boolean, default=True)

    type = relationship("VehicleTypeDB")

# Create tables
def init_db():
    Base.metadata.create_all(bind=engine)

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()