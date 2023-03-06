import React from 'react'

const SectionTitle2 = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="wpo-section-title-s2">
                    <span>{props.subTitle}</span>
                    <h2>{props.Title}</h2>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle2;