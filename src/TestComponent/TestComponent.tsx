import React from 'react'
import { TestComponentProps } from './TestComponent.types'
import './TestComponent.scss'

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h2 className="heading">I'm the test component</h2>
    <h3>Made by raozhanping</h3>
  </div>
)
export default TestComponent
