from uuid import UUID, uuid7

from pydantic import BaseModel, Field


class UUIDModel(BaseModel):
    id: UUID = Field(default_factory=uuid7)


class CreateBaseModel(BaseModel):
    pass
