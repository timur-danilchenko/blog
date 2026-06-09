import uuid
from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class CreatePostRequest(BaseModel):
    label: str
    content: str
    created_at: datetime = Field(default_factory=datetime.now)


class PostResponse(BaseModel):
    id: uuid.UUID
    label: str
    content: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
