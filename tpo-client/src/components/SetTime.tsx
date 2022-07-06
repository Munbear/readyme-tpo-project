import React, {useCallback, useEffect, useRef} from 'react';
import classnames from "classnames";
import {SliderBar} from "../styles/TimeStyle";

interface MultiRangeSliderProps {
    min: number;
    max: number;
    minVal:number;
    maxVal:number;
    startTime: (value: number) => void
    endTime: (value: number) => void
}


function SetTime({min, max, minVal, maxVal, startTime, endTime}: MultiRangeSliderProps) {

    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);

    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value);

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    return (
        <div>
            <SliderBar>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    ref={minValRef}
                    onChange={(event) => {
                        const value = Math.min(+event.target.value, maxVal - 1);
                        startTime(value);
                        event.target.value = value.toString();
                    }}
                    className={classnames("thumb thumb-zindex-3", {
                        "thumb-zindex-5": minVal > max - 100
                    })}
                    style={{zIndex: '5'}}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    ref={maxValRef}
                    onChange={(event) => {
                        const value = Math.max(+event.target.value, minVal + 1);
                        endTime(value);
                        event.target.value = value.toString();
                    }}
                    className="thumb thumb-zindex-4"
                />
                <div className='slider'>
                    <div className='slider-track'/>
                    <div ref={range} className='slider-range'/>
                    <div className='slider-left-value'>{minVal}:00</div>
                    <div className='slider-right-value'>{maxVal}:00</div>
                </div>
            </SliderBar>
        </div>
    )
}

export {SetTime}