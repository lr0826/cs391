import { useState, useEffect } from 'react'

export type CalcOps = {
    add: () => number | string
    subtract: () => number | string
    divide: () => number | string
    multiply: () => number | string
    power: () => number | string
}


export function useCalcOperations(a: string, b: string): CalcOps {
    const [ops, setOps] = useState<CalcOps>({
        add: () => 0,
        subtract: () => 0,
        divide: () => 'Division by zero',
        multiply: () => 0,
        power: () => 1
    })

    useEffect(() => {
        const one = Number(a)
        const two = Number(b)

        setOps({
            add: () => one + two,
            subtract: () => one - two,
            divide: () => (two === 0 ? 'Division by zero' : one / two),
            multiply: () => one * two,
            power: () => {
                if (Number.isInteger(two)) {
                    if (two === 0) return 1
                    let res = 1
                    const times = Math.abs(two)
                    for (let i = 0; i < times; i++) res *= one
                    return two < 0 ? 1 / res : res
                }
                return 'Exponent must be an integer for this calculator.'
            }
        })
    }, [a, b])

    return ops
}

