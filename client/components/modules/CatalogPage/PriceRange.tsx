
import { IPriceRangeProps } from '@/types/catalog';
import { Range, getTrackBackground } from 'react-range';

const MIN = 1700;
const MAX = 219000;
const STEP = 1;



export const PriceRange = ({priceRange, setPriceRange}: IPriceRangeProps) =>{

    const handlePriceRange = (values: number[])=>{
        setPriceRange(values)
    }

    return (
        // <Range
        //   step={0.1}
        //   min={1700}
        //   max={219000}
        //   values={priceRange}
        //   onChange={setPriceRange}
        //   renderTrack={({ props, children }) => (
        //     <div
        //       {...props}
        //       style={{
        //         ...props.style,
        //         height: '1px',
        //         width: '100%',
        //         backgroundColor: '#1E1E1E'
        //       }}
        //     >
        //       {children}
        //     </div>
        //   )}
        //   renderThumb={({ props }) => (
        //     <div
        //       {...props}
        //       style={{
        //         ...props.style,
        //         height: '42px',
        //         width: '42px',
        //         backgroundColor: '#999'
        //       }}
        //     />
        //   )}
        // />
        <div>
          <Range
            values={priceRange}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={handlePriceRange}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: 'auto',
                  display: 'flex',
                  width: '100%',
                  padding: '0 10px',
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: '1px',
                    width: '100%',
                    borderRadius: '4px',
                    background: getTrackBackground({
                      values: priceRange,
                      colors: ['#1E1E1E'],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: 'center',
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                }}
              >
                <div
                  style={{
                    height: '1.5em',
                    width: '1.5em',
                    borderRadius: '50%',
                    background: '#1E1E1E',
                  }}
                />
              </div>
            )}
          />
        </div>

      );
}