import * as React from 'react'

const QuoteSvg = (props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 105.245 246.912"
        {...props}
      >
        <g id="container" transform="translate(-477.38 -263)">
          <g id="left">
            <path
              id="left-bracket"
              d="M-3.723-155.928H23.652v4.38H.657V56.94H23.652v4.38H-3.723Z"
              transform="translate(481.103 434)"
              fill="#454e57"
            />
            <g id="left-quote" transform="translate(514.753 261.5)">
              <path
                id="Path_27321"
                data-name="Path 27321"
                d="M13.341,11.982V25.324H0V11.792C0,2.644,8.576,1.5,8.576,1.5L9.72,4.168S5.908,4.74,5.146,7.789a4.783,4.783,0,0,0,.762,4.193Z"
                fill="#444"
              />
              <path
                id="Path_27322"
                data-name="Path 27322"
                d="M22.341,11.982V25.324H9V11.792C9,2.644,17.576,1.5,17.576,1.5L18.72,4.168s-3.812.572-4.574,3.621a4.783,4.783,0,0,0,.762,4.193Z"
                transform="translate(8.153)"
                fill="#444"
              />
            </g>
          </g>
          <g id="right">
            <path
              id="right-bracket"
              d="M-3.723,14.928H23.652v-4.38H.657V-197.94H23.652v-4.38H-3.723Z"
              transform="translate(578.902 293) rotate(180)"
              fill="#454e57"
            />
            <g id="right-quote" transform="translate(514.753 486.088)">
              <path
                id="Path_27321-2"
                data-name="Path 27321"
                d="M0,14.841V1.5H13.341V15.032c0,9.148-8.576,10.292-8.576,10.292L3.621,22.655s3.812-.572,4.574-3.621a4.783,4.783,0,0,0-.762-4.193Z"
                transform="translate(17.153 -1.5)"
                fill="#444"
              />
              <path
                id="Path_27322-2"
                data-name="Path 27322"
                d="M9,14.841V1.5H22.341V15.032c0,9.148-8.576,10.292-8.576,10.292l-1.144-2.668s3.812-.572,4.574-3.621a4.783,4.783,0,0,0-.762-4.193Z"
                transform="translate(-9 -1.5)"
                fill="#444"
              />
            </g>
          </g>
        </g>
      </svg>
    )
}

export default QuoteSvg