import { render, screen, fireEvent } from "@testing-library/react"
import Form from "./Form"

test('test1', ()=>{
    render(<Form />)
    const textbox = screen.getByRole('textbox');
    
})