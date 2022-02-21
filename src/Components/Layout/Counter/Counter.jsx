import React from 'react'
import { useCounter } from '../../../CustomsHooks/useCounter'
import { Button } from '../../Ui/Button/Button'

export const Counter = ({method}) => {

    const {counter, Increment, Decrement, Restart} = useCounter()

    method(counter)
    return (
        <>
            <p>{counter}</p>
            <Button value='Increment' style='btn_dark' method={Increment} />
            <Button value='Decrement' style='btn_dark' method={Decrement} />
            <Button value='Restart' style='btn_dark' method={Restart} />
        </>
    )
}
