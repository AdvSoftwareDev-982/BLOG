from fastapi import APIRouter, Depends, HTTPException
from fastcrud import FastCRUD
from sqlalchemy.ext.asyncio import AsyncSession
from transformers import T5Tokenizer, T5ForConditionalGeneration

from .schemas import BlogCreate
from .db import Blog, User, get_async_session
from .users import current_active_user

blog_router = APIRouter()
blog_crud = FastCRUD(Blog)

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

@blog_router.post("")
async def create_blog(
    blog_data: BlogCreate,
    db: AsyncSession = Depends(get_async_session),
    user: User = Depends(current_active_user),
):
    input_ids = tokenizer("summarize: " + blog_data.text, return_tensors="pt").input_ids
    outputs = model.generate(input_ids=input_ids)
    blog_data.summary = tokenizer.decode(outputs[0], skip_special_tokens=True)

    return await blog_crud.create(db, blog_data)


@blog_router.get("")
async def get_blog(db: AsyncSession = Depends(get_async_session)):
    blog = await blog_crud.get_multi(db, return_total_count=True)
    if not blog:
        raise HTTPException(status_code=404, detail="blog not found")
    return blog


@blog_router.get("/{id}")
async def get_blog_by_id(id: int, db: AsyncSession = Depends(get_async_session)):
    blog = await blog_crud.get(db, id=id)
    if not blog:
        raise HTTPException(status_code=404, detail="blog not found")
    return blog
