// Package api provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/oapi-codegen/oapi-codegen/v2 version v2.4.1 DO NOT EDIT.
package api

import (
	openapi_types "github.com/oapi-codegen/runtime/types"
)

// CreateTodo defines model for CreateTodo.
type CreateTodo struct {
	Content *string `json:"content,omitempty"`
	Title   string  `json:"title"`
}

// Error defines model for Error.
type Error struct {
	Code    int64  `json:"code"`
	Message string `json:"message"`
}

// Todo defines model for Todo.
type Todo struct {
	Content   *string `json:"content,omitempty"`
	CreatedAt string  `json:"createdAt"`
	Id        Uuid    `json:"id"`
	Title     string  `json:"title"`
	UpdatedAt string  `json:"updatedAt"`
	UserId    Uuid    `json:"userId"`
}

// TodoList defines model for TodoList.
type TodoList struct {
	Todos []Todo `json:"todos"`
	Total int64  `json:"total"`
}

// UpdateTodo defines model for UpdateTodo.
type UpdateTodo struct {
	Content *string `json:"content,omitempty"`
	Title   *string `json:"title,omitempty"`
}

// Uuid defines model for uuid.
type Uuid = openapi_types.UUID

// TodosCreateJSONRequestBody defines body for TodosCreate for application/json ContentType.
type TodosCreateJSONRequestBody = CreateTodo

// TodosUpdateJSONRequestBody defines body for TodosUpdate for application/json ContentType.
type TodosUpdateJSONRequestBody = UpdateTodo
