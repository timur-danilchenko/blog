from fastapi import FastAPI

from app.transport.api.base import router


app = FastAPI()

app.include_router(router)
