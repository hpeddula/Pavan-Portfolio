import React from 'react'
import './loader.scss';
export default function Loading() {
    return (
        <div>
            <div className="text-center">
                <div className="spinner-border spinner-size" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}
