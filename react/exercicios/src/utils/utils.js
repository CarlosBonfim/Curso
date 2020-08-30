import React from 'react'
export function childrenWithProps(props){
    React.Children.map(props.children, child => {
        return React.cloneElement(props.children, {
            ...props, ...child.props
        })
    })
}