import { ErrorMessageStyle } from "./style"

const ErrorMessage = ({message}) => {
    return(
        <ErrorMessageStyle>
            {message}
        </ErrorMessageStyle>
    )
}
export default ErrorMessage