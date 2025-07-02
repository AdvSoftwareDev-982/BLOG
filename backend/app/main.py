from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI
from fastcrud import FastCRUD, crud_router
from .db import User, create_db_and_tables, Blog, get_async_session
from .schemas import UserCreate, UserRead, UserUpdate, BlogCreate, BlogUpdate
from .users import auth_backend, current_active_user, fastapi_users
from fastapi.middleware.cors import CORSMiddleware

@asynccontextmanager
async def lifespan(app: FastAPI):
    await create_db_and_tables()
    yield


app = FastAPI(lifespan=lifespan)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"]
)
app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_reset_password_router(),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_verify_router(UserRead),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_users_router(UserRead, UserUpdate),
    prefix="/users",
    tags=["users"],
)

blog_router = crud_router(
    session=get_async_session,
    model=Blog,
    create_schema=BlogCreate,
    update_schema=BlogUpdate,
    path="/blog",
    tags=["blog"]
)
app.include_router(blog_router)
