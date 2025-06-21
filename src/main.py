from fastapi import FastAPI
from typing import List
from models.user import UserResponse
from motor.motor_asyncio import AsyncIOMotorClient

from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI(
    title="Timelog API: Dev"
)
url = os.getenv("DB_URI")
client = AsyncIOMotorClient(url)
db = client["timelog"]
collection = db["users"]


@app.get("/connection/", tags=["Connection"], summary="Test MongoDB Connection")
async def Connect():
    try:
        # Try to ping the server
        await client.admin.command("ping")
        return {"message": f"Connection to MongoDB successful"}
    except Exception as e:
        return {"error": str(e)}

@app.get("/users/", tags=["Users"], summary="Get all user information", response_model=List[UserResponse])
async def view_users():
    try:
        users_cursor = collection.find()
        users = []
        async for user in users_cursor:
            print(user)
            users.append(UserResponse(**user))            

        return users
    except Exception as e:
        return {"error": str(e)}