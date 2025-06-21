from pydantic import BaseModel
from typing import Optional
class User:
  def __init__(
      self,
      id: int,
      username: str,
      password: str,
      email: str,
      phone: str,
      created_at: str,
      is_active: bool,
      role: str
    ):
    self.id = id
    self.username = username
    self.password = password
    self.email = email
    self.phone = phone
    self.created_at = created_at
    self.is_active = is_active
    self.role = role

class UserResponse(BaseModel):
  id: int
  username: str
  email: str
  phone: str
  created_at: str
  is_active: bool
  role: str

  class Config:
    orm_mode = True
    allow_population_by_field_name = True