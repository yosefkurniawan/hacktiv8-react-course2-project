import Link from "next/link";
import styles from './default.module.css';

const Button = (props) => {
    if(props.type === 'link') {
        return (
            <Link href={props.href} as={props.as}>
                <button
                    className={`button ${styles.button} ${
                        props.className ? props.className : ""
                    }`}
                >
                    {props.title}
                </button>
            </Link>
        );
    }else{
        return (
            <button
                className={`button ${styles.button} ${
                    props.className ? props.className : ""
                }`}
                onClick={props.handleOnCLick}
            >
                {`${props.title}(${props.qty})`}
            </button>
        );
    }
}

export default Button;
