from fastapi import FastAPI

from app.api.handlers.base import router


app = FastAPI()

app.include_router(router)
