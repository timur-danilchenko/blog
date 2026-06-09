from math import ceil
from typing import Generic, TypeVar
from uuid import UUID, uuid7

from fastapi import Query
from pydantic import BaseModel, Field


T = TypeVar("T")


class UUIDModel(BaseModel):
    id: UUID = Field(default_factory=uuid7)


class CreateBaseModel(BaseModel):
    pass


class PaginationRequest(BaseModel):
    page: int = Query(1, ge=1)
    size: int = Query(10, ge=1, le=100)

    @property
    def offset(self) -> int:
        return (self.page - 1) * self.size


class PaginatedResponse(BaseModel, Generic[T]):
    items: list[T]
    total: int
    page: int
    size: int
    pages: int


class PaginatedFactory:
    def __call__(self, items: list[T], total: int, page: int, size: int) -> "PaginatedResponse[T]":
        return PaginatedResponse(
            items=items,
            total=total,
            page=page,
            size=size,
            pages=ceil(total / size),
        )


paginate = PaginatedFactory()
