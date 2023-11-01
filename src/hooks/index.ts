import {useState} from 'react'

export function useStack<T>(initialStack: T[]) {
  const [stack, setStack] = useState<T[]>(initialStack)

  const push = (content: T) => {
    setStack(oldStack => [...oldStack, content])
  }

  const pop = () => {
    setStack(stack => stack.slice(0, -1))
  }

  const popAll = () => {
    setStack(stack => [])
  }

  const replaceAll = (content: T) => {
    setStack(stack => [content])
  }

  const replace = (content: T) => {
    setStack(stack => {
      const newStack = [...stack]
      newStack[newStack.length - 1] = content
      return newStack
    })
  }

  return {
    stack,
    push,
    pop,
    popAll,
    replace,
    replaceAll
  }
}
