import React from 'react'

export default function TagComponent({ tag }: { tag: string }) {
    const tagColor = (tag: string) => {
        if (tag === 'code') return "purple"
        if (tag === 'design') return "blue"
        if (tag === 'tutorial') return "green"
        if (tag === 'project') return "yellow"
        if (tag === 'tips') return "purple"
        if (tag === 'life') return "#4cb9d4"
        else return "red"
    }
    return (
        <div
            className='px-[0.5rem] py-[0.2rem] rounded-[0.75rem] text-[0.75rem] font-[600]
            flex justify-center items-center w-[fit-content] text-white font-poppins
            
            '
            style={{
                backgroundColor: tagColor(tag)
            }}
        >
            #{tag}
        </div>
    )
}

// css