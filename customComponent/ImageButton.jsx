import { Image, TouchableOpacity } from "react-native";


function ImageButton({ layoutStyle, buttonStyle, onPressCallback}){

    return(
        <TouchableOpacity
            style = {layoutStyle}
            onPress={onPressCallback}
            >
            <Image 
                style = {buttonStyle}
             source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACUCAMAAAC3HHtWAAAAY1BMVEX///8AAADY2Nj6+vre3t7y8vLh4eHs7OxZWVlWVlb19fW/v79BQUHS0tKioqK7u7uYmJgWFhYkJCRra2uxsbE5OTmAgIBgYGBycnJKSkozMzMaGhqqqqqMjIwqKirLy8sODg7t3uCXAAACfElEQVR4nO2cCXKjMBBFEcIsZl+MITHG9z9lwMYOILWrUpWZ3zXT7wSvWBp1fwnHEQRBEAThr6Pjom3bi4f22KHTs1oosyPaZkXaqRV9jPZ5EX+oDZ8Z2mjhogwuaKc7uSmmVIG2mghKmxkHtdYqplSKFhsrwqw/gM0KQkypBisWnEmzFltxPfvzP3P1oWYuKaaUK2Zi9ku8eQMq7BsQhKRZDS61bCst/XVKArCZQ30EcrSYE9jFWrSXY13STmIarTUzmGIDC7Hpqn3uxBgsaBfiTVVL0PViTZD33xcMW/sNdHDpoug8jJw6dEEQBEEQBEEQBEH4P/GbLMuZjQ4cJ4hfg42a0wDhkPXrYVDHZmuEH+3mZyd47Pogvxkzx4rFxoh4P3G8XzUGNzSwBwIR2stxaquYUvDdJDEViSXgyqYtI/cF8D4X/0SaddiC+yZ5BeebfDNhMfs5nvllYmIWJKQYeI+LLUJcAFcN+hsAT/j1fm32BJ/wp4QZ/ItOPWkhWmtCdxaxE4se6miqXUe01EJx3T39TDqUiXSzd7Vl0AS80N7wbFQ6l1En/ECPeRPDq5ggCIIgCIIgCMKEGzdNM7LrUI5ZeJrbuqrv+HTBE4fNOZmaxUzjjruboX2wyBAnUiNHqXgMXGzHxFgkr/pqiikOh4qoQ2I3+GvgUWFdjTbLCDF1A9/PAxVWw888+fbnfwYcV/PN6sTsXzLzaLESO3v36eQ1xC4i3+wkQYd1li1eD+C7qY5U8oo/XTraxRK0l0P8yCXkkD3ZkteaR3Nnrjd6DlfsTrZZcZQcTsk/cYfvX1PVHLqTFV7eJuWtiooR/Z8gC3oGLSEIwp/mCx3IGChCg1jtAAAAAElFTkSuQmCC'
             }}
            />
        </TouchableOpacity>
    )

    
}

export default ImageButton