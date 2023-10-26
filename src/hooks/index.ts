import {useState} from 'react'

export function useStack<T>(initialStack: T[]) {
  const [stack, setStack] = useState<T[]>(initialStack)

  const push = (content: T) => {
    setStack(oldStack => [...oldStack, content])
  }

  const pop = () => {
    setStack(stack => stack.slice(0, -1))
  }

  const popToTop = () => {
    setStack(stack => [])
  }

  const replace = (content: T) => {
    setStack(stack => [content])
  }

  return {
    stack,
    push,
    pop,
    popToTop,
    replace,
  }
}
