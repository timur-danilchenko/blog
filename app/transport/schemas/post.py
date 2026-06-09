from datetime import datetime

from pydantic import BaseModel, Field


class CreatePost(BaseModel):
    label: str
    content: str
    created_at: datetime = Field(default_factory=datetime.now)
