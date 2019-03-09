import React from 'react'
import './loader.scss';
export default function Loading() {
    return (
        <div>
            <div class="text-center">
                <div class="spinner-border spinner-size" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}
