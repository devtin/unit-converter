Feature: Web-based unit converter

  Science teachers require a web-based unit converter (temperature and volume)
  where they can enter questions and student responses, then get the computed answer
  so they can be graded

  Scenario: Accessing the application
    Given a web browser
    When a teacher access the application
    Then they should be able to enter an input value
    And they should be able to enter an input unit
    And they should be able to enter a response value
    And they should be able to enter a response unit

  Scenario Outline: Grading a student
    Given the application
    When the user enters "<input value>" in the input value field
    And the user enters "<input unit>" in the input unit field
    And the user enters "<target unit>" in the response unit field
    And the user enters "<response>" in the response value field
    Then "<output>" must appear in the output field

    Examples:
      | input value | input unit | target unit | response | output    |
      | 84.2        | Fahrenheit | Rankine     | 543.94   | correct   |
      | 317.33      | Kelvin     | Fahrenheit  | 111.554  | incorrect |
      | 25.6        | cups       | liters      | 6.1      | correct   |
      | 73.12       | gallons    | Kelvin      | 19.4     | invalid   |
      | 6.5         | Fahrenheit | Rankine     | dog      | incorrect |
      | 136.1       | dog        | Celsius     | 45.32    | invalid   |
