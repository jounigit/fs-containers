import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Todo from './Todo'

describe('Todo', () => {
  it('renders non-done todo with delete and complete buttons', () => {
    const todo = { _id: '1', text: 'Todo 1', done: false }
    const deleteTodo = vi.fn()
    const completeTodo = vi.fn()

    render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)

    expect(screen.getByText('Todo 1')).toBeInTheDocument()
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /set as done/i })).toBeInTheDocument()
  })

  it('calls deleteTodo and completeTodo when action buttons are clicked', () => {
    const todo = { _id: '1', text: 'Todo 1', done: false }
    const deleteTodo = vi.fn()
    const completeTodo = vi.fn()

    render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)

    fireEvent.click(screen.getByRole('button', { name: /delete/i }))
    fireEvent.click(screen.getByRole('button', { name: /set as done/i }))

    expect(deleteTodo).toHaveBeenCalledTimes(1)
    expect(deleteTodo).toHaveBeenCalledWith(todo)
    expect(completeTodo).toHaveBeenCalledTimes(1)
    expect(completeTodo).toHaveBeenCalledWith(todo)
  })

  it('renders done todo without complete button', () => {
    const todo = { _id: '2', text: 'Todo 2', done: true }
    const deleteTodo = vi.fn()
    const completeTodo = vi.fn()

    render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)

    expect(screen.getByText('Todo 2')).toBeInTheDocument()
    expect(screen.getByText('This todo is done')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /set as done/i })).toBeNull()
  })
})
