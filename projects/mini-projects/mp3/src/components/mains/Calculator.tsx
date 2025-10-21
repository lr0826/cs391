import { useState} from 'react';
import styled from 'styled-components';
import { useCalcOperations } from './useCalc.ts';

const Card = styled.div`
  max-width: 560px;
  width: 100%;
  margin: 0 auto 28px;
  padding: 18px 20px;
  background: lightcyan;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  box-shadow: 0 6px 16px;
`

const Title = styled.h2`
  margin: 0 0 12px;
  font-size: calc(18px + 0.6vw);
`

const Label = styled.label`
  display: block;
  margin: 16px 0 6px;
  font-weight: 600;
  font-size: calc(14px + 0.2vw);
  background: lightyellow;
  padding: 4px 8px;
  border-radius: 6px;
  width: fit-content;
  color: #374151;
`

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: calc(14px + 0.2vw);
  outline: none;
`

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 14px;
`

const Btn = styled.button`
  background: #ffffff;
  color: #2a2152;
  border: 2px solid #cfc7ff;
  border-radius: 999px;
  font-weight: 800;
  padding: 12px 0;
  text-align: center;
  margin: 0 8px 8px 0;
  width: calc((100% - 24px) / 3);
`

// typed prop for styled component
const Output = styled.h3`
  margin-top: 12px;
  min-height: 1.9em;
  font-weight: 900;
  font-size: calc(16px + 0.3vw);
  color: #1f1735;
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: #efeaff;
  border: 1px solid #ded6ff;
`

// Optional: describe the hook’s shape if your useCalcOperations is JS
type CalcOps = {
    add: () => number | string
    subtract: () => number | string
    divide: () => number | string
    multiply: () => number | string
    power: () => number | string
}

export default function Calculator() {
    const [one, setOne] = useState<string>('')
    const [two, setTwo] = useState<string>('')
    const [result, setResult] = useState<string>('')


    const ops = useCalcOperations(one, two) as CalcOps

    const doOp = (fn: () => number | string) => {
        const value = fn()
        setResult(String(value))
    }

    return (
        <Card>
            <Title>JavaScript Calculator</Title>

            <Label htmlFor="one">First Number:</Label>
            <Input
                id="one"
                value={one}
                onChange={(e) => setOne((e.target as HTMLInputElement).value)}
            />

            <Label htmlFor="two">Second Number:</Label>
            <Input
                id="two"
                value={two}
                onChange={(e) => setTwo((e.target as HTMLInputElement).value)}
            />

            <Buttons>
                <Btn onClick={() => doOp(ops.add)}>+</Btn>
                <Btn onClick={() => doOp(ops.subtract)}>-</Btn>
                <Btn onClick={() => doOp(ops.divide)}>/</Btn>
                <Btn onClick={() => doOp(ops.multiply)}>*</Btn>
                <Btn onClick={() => doOp(ops.power)}>**</Btn>
                <Btn onClick={() => { setOne(''); setTwo(''); setResult('') }}>Clear</Btn>
                <Output id="output">{result}</Output>
            </Buttons>
        </Card>
    )
}


