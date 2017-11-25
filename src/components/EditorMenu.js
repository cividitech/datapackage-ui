const React = require('react')
const {EditorKeywords} = require('./EditorKeywords')


// Module API

function EditorMenu({

  // Props
  descriptor,
  updatePackage,
  validate,
  download,

}) {
  return (
    <section className="package">
      <div className="inner">

        {/* Load */}
        <div className="start">
          <a className="logo">
            <svg width="100%" height="100%" viewBox="0 0 369 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.41421'}}>
              <g transform="matrix(0.810978,0,0,0.810978,0,0)">
                <path d="M81.2,27.2L81.2,0L0,0L0,81.2C23.4,81.2 12.9,81.2 27.2,81.2L27.2,108.4C54.3,108.4 81.3,108.4 108.4,108.4L108.4,43.2L108.4,38.6L108.4,27.2L81.2,27.2ZM15.9,65.3L15.9,15.9L65.3,15.9L65.3,27.2L27.2,27.2L27.2,65.3L15.9,65.3L15.9,65.3ZM92.5,92.5L43.1,92.5L43.1,43.1L92.5,43.1L92.5,92.5Z" />
              </g>
              <path d="M284.004,28.709C284.41,28.709 284.815,29.033 284.896,29.52L284.896,56.201C284.896,58.39 284.491,60.418 283.68,62.121C282.869,63.905 281.734,65.365 280.274,66.581C278.814,67.798 277.111,68.69 275.084,69.339C273.056,69.987 270.948,70.312 268.596,70.312C265.352,70.312 262.676,69.744 260.486,68.69C258.296,67.636 256.35,66.095 254.809,64.148C254.566,63.824 254.566,63.418 254.89,63.094L258.783,59.282C258.945,59.12 259.188,59.039 259.432,59.039C259.675,59.039 259.837,59.201 259.999,59.364C260.973,60.58 262.27,61.472 263.73,62.202C265.19,62.932 266.812,63.256 268.515,63.256C269.488,63.256 270.461,63.094 271.434,62.851C272.326,62.526 273.137,62.121 273.867,61.553C274.516,60.986 275.084,60.256 275.489,59.364C275.895,58.471 276.057,57.417 276.057,56.201L276.057,55.065C275.327,55.876 274.435,56.525 273.381,57.093C271.596,57.985 269.65,58.471 267.623,58.471C265.595,58.471 263.73,58.066 262.108,57.255C260.486,56.525 259.107,55.39 257.891,54.011C256.674,52.632 255.782,51.01 255.134,49.226C254.485,47.442 254.16,45.577 254.16,43.549C254.16,41.441 254.485,39.495 255.134,37.629C255.863,35.764 256.756,34.142 257.972,32.763C259.188,31.304 260.648,30.249 262.351,29.438C264.054,28.628 265.92,28.222 267.947,28.222C270.299,28.222 272.326,28.79 274.11,29.844C275.165,30.493 276.138,31.223 276.949,32.115L276.949,29.52C276.949,29.033 277.273,28.709 277.76,28.709L284.004,28.709ZM108.752,28.628C109.239,28.628 109.563,28.952 109.563,29.438L109.563,31.871C110.374,30.979 111.266,30.249 112.32,29.682C114.105,28.628 116.132,28.141 118.403,28.141C120.43,28.141 122.295,28.546 123.998,29.357C125.702,30.168 127.161,31.304 128.378,32.682C129.594,34.061 130.486,35.683 131.216,37.548C131.946,39.414 132.27,41.36 132.27,43.306C132.27,45.415 131.946,47.442 131.297,49.307C130.648,51.173 129.756,52.795 128.621,54.173C127.486,55.552 126.107,56.687 124.485,57.498C122.863,58.309 121.079,58.715 119.214,58.715C116.862,58.715 114.834,58.147 113.05,57.093C112.077,56.525 111.185,55.795 110.455,54.984L110.455,68.771C110.455,69.257 110.131,69.582 109.644,69.582L102.508,69.582C102.021,69.582 101.697,69.257 101.697,68.771L101.697,29.438C101.697,28.952 102.021,28.628 102.508,28.628L108.752,28.628ZM162.033,50.605C161.709,50.605 161.385,50.524 161.303,50.362C161.222,50.281 161.06,50.037 161.06,49.307L161.06,40.549C161.06,36.575 159.844,33.493 157.411,31.385C155.059,29.276 151.734,28.222 147.517,28.222C143.219,28.222 139.164,29.438 135.433,31.953C135.109,32.196 134.947,32.601 135.19,33.007L137.38,37.548C137.461,37.792 137.704,37.954 137.866,37.954C138.109,38.035 138.353,37.954 138.515,37.873C139.975,36.899 141.353,36.089 142.732,35.602C144.03,35.115 145.408,34.872 146.787,34.872C148.652,34.872 150.031,35.278 150.923,36.17C151.815,36.981 152.22,38.197 152.22,39.819L152.22,40.224C151.572,39.981 150.761,39.819 150.031,39.657C148.814,39.414 147.517,39.332 146.219,39.332C144.435,39.332 142.732,39.576 141.191,40.062C139.65,40.549 138.272,41.198 137.217,42.009C136.082,42.901 135.19,43.874 134.541,45.171C133.892,46.388 133.568,47.767 133.568,49.226C133.568,50.605 133.811,51.903 134.379,53.119C134.866,54.254 135.677,55.309 136.569,56.201C137.461,57.093 138.596,57.742 139.894,58.228C141.191,58.715 142.489,58.958 143.949,58.958C146.057,58.958 148.166,58.471 150.031,57.579C151.328,56.931 152.545,56.12 153.599,54.984C153.842,56.039 154.41,56.931 155.221,57.661C156.6,58.796 158.871,59.039 162.196,58.39C162.601,58.309 162.844,57.985 162.844,57.579L162.844,51.497C162.844,50.929 162.439,50.605 162.033,50.605ZM252.214,50.605C251.971,50.605 251.646,50.524 251.484,50.362C251.403,50.281 251.241,50.037 251.241,49.307L251.241,40.549C251.241,36.575 250.024,33.493 247.591,31.385C245.24,29.276 241.915,28.222 237.698,28.222C233.399,28.222 229.344,29.438 225.614,31.953C225.29,32.196 225.127,32.601 225.371,33.007L227.56,37.548C227.641,37.792 227.885,37.954 228.047,37.954C228.29,38.035 228.533,37.954 228.696,37.873C230.155,36.899 231.534,36.089 232.913,35.602C234.21,35.115 235.589,34.872 236.968,34.872C238.833,34.872 240.212,35.278 241.104,36.17C241.996,36.981 242.401,38.197 242.401,39.819L242.401,40.224C241.752,39.981 240.941,39.819 240.212,39.657C238.995,39.414 237.698,39.332 236.4,39.332C234.616,39.332 232.913,39.576 231.372,40.062C229.831,40.549 228.452,41.198 227.398,42.009C226.263,42.901 225.371,43.955 224.722,45.171C224.073,46.388 223.749,47.767 223.749,49.226C223.749,50.605 223.992,51.903 224.56,53.119C225.046,54.254 225.857,55.309 226.749,56.201C227.641,57.093 228.777,57.742 230.074,58.228C231.372,58.715 232.669,58.958 234.129,58.958C236.238,58.958 238.346,58.471 240.212,57.579C241.509,56.931 242.726,56.12 243.78,54.984C244.023,56.039 244.591,56.931 245.402,57.661C246.78,58.796 249.051,59.039 252.376,58.39C252.782,58.309 253.025,57.985 253.025,57.579L253.025,51.497C253.025,50.929 252.62,50.605 252.214,50.605ZM338.259,19.626C338.745,19.626 339.07,19.95 339.07,20.437L339.07,28.628L344.098,28.628C344.584,28.628 344.909,28.952 344.909,29.438L344.909,34.953C344.909,35.44 344.584,35.764 344.098,35.764L339.07,35.764L339.07,48.74C339.07,49.47 339.232,49.956 339.556,50.2C340.367,50.767 341.746,50.686 342.881,50.281C343.611,50.037 344.179,49.794 344.584,49.632C344.747,49.551 344.99,49.551 345.233,49.632C345.395,49.713 345.558,49.875 345.639,50.118L347.098,55.795C347.18,56.201 347.017,56.606 346.612,56.85C345.558,57.255 344.341,57.742 342.962,58.147C341.503,58.553 339.962,58.796 338.34,58.796C337.286,58.796 336.312,58.634 335.339,58.39C334.366,58.066 333.474,57.661 332.744,57.012C332.014,56.363 331.365,55.552 330.96,54.579C330.554,53.606 330.311,52.47 330.311,51.092L330.311,35.845L327.473,35.845C326.986,35.845 326.662,35.521 326.662,35.034L326.662,29.52C326.662,29.033 326.986,28.709 327.473,28.709L330.311,28.709L330.311,20.437C330.311,19.95 330.636,19.626 331.122,19.626L338.259,19.626ZM193.418,50.443C193.337,50.2 193.175,50.037 192.932,50.037L185.957,47.929C185.552,47.848 185.146,48.01 184.984,48.334C184.66,49.064 184.011,49.794 183.038,50.362C182.064,50.929 181.01,51.173 179.875,51.173C178.983,51.173 178.172,51.01 177.361,50.605C176.55,50.281 175.901,49.713 175.333,49.064C174.766,48.415 174.279,47.604 173.874,46.631C173.549,45.658 173.306,44.604 173.306,43.468C173.306,42.333 173.468,41.279 173.792,40.306C174.117,39.414 174.603,38.603 175.171,37.954C175.739,37.305 176.469,36.818 177.199,36.413C178.01,36.089 178.821,35.845 179.713,35.845C180.767,35.845 181.74,36.089 182.632,36.575C183.524,37.062 184.173,37.71 184.741,38.684C184.903,39.008 185.308,39.17 185.714,39.089L192.688,36.981C192.932,36.899 193.094,36.737 193.175,36.494C193.256,36.251 193.256,36.007 193.175,35.845C192.039,33.574 190.336,31.709 188.066,30.331C185.795,28.952 183.038,28.222 179.794,28.222C177.442,28.222 175.252,28.628 173.306,29.438C171.441,30.249 169.738,31.385 168.44,32.763C167.061,34.142 166.007,35.764 165.358,37.629C164.628,39.495 164.304,41.441 164.304,43.468C164.304,45.496 164.71,47.442 165.439,49.307C166.169,51.173 167.224,52.795 168.602,54.254C169.981,55.633 171.603,56.768 173.549,57.579C175.496,58.39 177.604,58.796 180.037,58.796C183.281,58.796 186.119,58.066 188.39,56.687C190.742,55.228 192.445,53.362 193.418,51.092C193.499,50.848 193.499,50.605 193.418,50.443ZM325.04,45.739C324.553,44.766 323.823,43.955 322.85,43.225C321.958,42.576 320.742,41.928 319.282,41.441C317.903,40.954 316.2,40.387 314.254,39.9C313.281,39.657 312.389,39.414 311.74,39.17C311.091,38.927 310.604,38.765 310.199,38.521C309.875,38.359 309.712,38.116 309.55,37.954C309.469,37.792 309.388,37.467 309.388,37.143C309.388,36.089 309.875,35.683 310.199,35.44C310.848,35.034 311.74,34.791 312.794,34.791C314.011,34.791 315.227,35.034 316.525,35.521C317.741,36.007 319.12,36.737 320.498,37.792C320.661,37.954 320.904,37.954 321.147,37.954C321.39,37.954 321.553,37.792 321.715,37.629L324.634,33.331C324.878,33.007 324.797,32.52 324.472,32.277C322.85,30.817 321.066,29.844 319.12,29.195C317.173,28.546 315.146,28.222 312.956,28.222C311.334,28.222 309.793,28.465 308.334,28.871C306.874,29.357 305.657,30.006 304.603,30.817C303.549,31.709 302.657,32.763 302.089,33.98C301.521,35.196 301.197,36.656 301.197,38.197C301.197,39.414 301.44,40.387 301.846,41.279C302.251,42.171 302.9,42.982 303.792,43.631C304.603,44.279 305.739,44.847 307.117,45.334C308.415,45.82 309.956,46.307 311.821,46.793C313.929,47.361 315.47,47.929 316.362,48.334C317.011,48.659 317.336,49.145 317.336,49.794C317.336,50.524 317.092,51.01 316.443,51.416C315.795,51.821 314.821,52.065 313.524,52.065C312.064,52.065 310.523,51.74 308.982,51.173C307.442,50.605 305.82,49.713 304.198,48.496C304.035,48.334 303.792,48.334 303.549,48.334C303.306,48.415 303.143,48.496 302.981,48.74L300.305,53.2C300.143,53.525 300.143,54.011 300.467,54.254C302.17,55.714 304.198,56.85 306.55,57.579C308.901,58.39 311.253,58.715 313.686,58.715C317.336,58.715 320.336,57.823 322.445,56.201C324.634,54.498 325.77,52.065 325.77,49.064C325.689,47.848 325.445,46.712 325.04,45.739ZM296.575,28.709C296.98,28.709 297.385,29.033 297.385,29.52L297.385,57.498C297.385,57.985 297.061,58.309 296.575,58.309L289.438,58.309C288.951,58.309 288.627,57.985 288.627,57.498L288.627,29.52C288.627,29.033 288.951,28.709 289.438,28.709L296.575,28.709ZM204.285,17.679C204.772,17.679 205.096,18.004 205.096,18.49L205.096,39.981L214.909,28.952C214.99,28.79 215.233,28.709 215.477,28.709L223.1,28.709C223.424,28.709 223.668,28.871 223.83,29.195C223.911,29.52 223.911,29.844 223.668,30.087L213.693,41.441L224.479,57.012C224.641,57.255 224.722,57.579 224.479,57.823C224.316,58.066 224.073,58.228 223.749,58.228L216.126,58.228C215.882,58.228 215.639,58.147 215.477,57.904L207.935,46.631L205.015,49.47L205.015,57.498C205.015,57.985 204.691,58.309 204.204,58.309L197.068,58.309C196.581,58.309 196.257,57.985 196.257,57.498L196.257,18.49C196.257,18.004 196.581,17.679 197.068,17.679L204.285,17.679ZM367.616,50.281C367.373,49.632 366.967,49.064 366.481,48.496C365.994,48.01 365.426,47.604 364.778,47.28C364.129,46.956 363.318,46.875 362.507,46.875C361.696,46.875 360.885,47.037 360.155,47.28C359.506,47.604 358.858,48.01 358.371,48.496C357.884,48.983 357.56,49.551 357.236,50.281C356.992,50.929 356.83,51.659 356.83,52.389C356.83,53.119 356.992,53.849 357.236,54.498C357.479,55.146 357.884,55.714 358.371,56.282C358.858,56.768 359.425,57.174 360.155,57.498C360.804,57.823 361.615,57.904 362.507,57.904C363.399,57.904 364.129,57.742 364.859,57.498C365.508,57.174 366.156,56.768 366.562,56.282C367.048,55.795 367.373,55.228 367.616,54.498C367.859,53.849 368.022,53.119 368.022,52.389C367.941,51.659 367.859,50.929 367.616,50.281ZM350.829,54.498C350.991,54.498 351.072,54.579 350.991,54.66L350.991,57.498C350.991,57.579 350.91,57.66 350.829,57.661L348.72,57.661C348.639,57.661 348.558,57.579 348.558,57.498L348.558,54.66C348.558,54.579 348.639,54.498 348.72,54.498L350.829,54.498ZM355.533,47.037C355.695,47.037 355.776,47.118 355.695,47.28L355.695,57.417C355.695,57.498 355.614,57.579 355.533,57.579L352.937,57.579C352.856,57.579 352.775,57.498 352.775,57.417L352.775,47.199C352.775,47.118 352.856,47.037 352.937,47.037L355.533,47.037ZM363.399,55.065C362.831,55.309 362.02,55.309 361.453,55.065C361.128,54.903 360.885,54.741 360.642,54.498C360.398,54.254 360.236,53.93 360.155,53.606C359.993,53.281 359.993,52.876 359.993,52.47C359.993,52.065 360.074,51.659 360.155,51.335C360.317,51.01 360.48,50.686 360.642,50.443C360.885,50.2 361.128,49.956 361.453,49.875C361.777,49.713 362.101,49.632 362.426,49.632C362.75,49.632 363.075,49.713 363.399,49.875C363.723,50.037 363.967,50.2 364.21,50.443C364.453,50.686 364.616,51.01 364.697,51.335C364.859,51.659 364.859,52.065 364.859,52.47C364.859,52.876 364.778,53.281 364.697,53.687C364.534,54.011 364.372,54.335 364.21,54.579C363.967,54.741 363.723,54.903 363.399,55.065ZM152.302,45.739L152.302,48.334C152.302,48.821 152.058,49.307 151.41,49.713C151.328,49.713 151.328,49.794 151.247,49.794C150.761,50.362 149.95,50.929 149.058,51.254C148.085,51.659 147.03,51.821 145.895,51.821C144.759,51.821 143.786,51.497 142.975,50.848C142.245,50.2 141.84,49.389 141.84,48.415C141.84,47.442 142.327,46.55 143.3,45.901C144.354,45.171 145.733,44.766 147.355,44.766C148.247,44.766 149.139,44.847 150.112,45.009C150.923,45.334 151.653,45.577 152.302,45.739ZM242.482,45.739L242.482,48.334C242.482,48.821 242.239,49.307 241.59,49.713C241.509,49.713 241.509,49.794 241.428,49.794C240.941,50.362 240.13,50.929 239.238,51.254C238.265,51.659 237.211,51.821 236.076,51.821C234.94,51.821 233.967,51.497 233.156,50.848C232.426,50.2 232.021,49.389 232.021,48.415C232.021,47.442 232.507,46.55 233.48,45.901C234.535,45.171 235.913,44.766 237.535,44.766C238.427,44.766 239.319,44.847 240.293,45.009C241.104,45.334 241.834,45.577 242.482,45.739ZM269.974,51.092C269.001,51.092 268.109,50.929 267.298,50.524C266.487,50.118 265.757,49.632 265.109,48.983C264.46,48.334 263.973,47.523 263.649,46.631C263.324,45.739 263.081,44.766 263.081,43.712C263.081,42.739 263.243,41.684 263.568,40.792C263.892,39.819 264.298,39.008 264.865,38.278C265.433,37.548 266.163,36.981 266.893,36.575C267.623,36.17 268.515,35.926 269.488,35.926C270.785,35.926 272.083,36.332 273.299,37.305C274.516,38.197 275.408,39.332 275.976,40.792L275.976,47.037C275.732,47.523 275.489,48.01 275.084,48.496C274.678,48.983 274.192,49.47 273.624,49.875C273.056,50.281 272.488,50.524 271.84,50.767C271.272,51.01 270.623,51.092 269.974,51.092ZM123.35,43.387C123.35,44.36 123.187,45.415 122.863,46.307C122.539,47.28 122.052,48.091 121.484,48.821C120.917,49.551 120.187,50.037 119.457,50.443C118.646,50.848 117.835,51.01 116.862,51.01C115.483,51.01 114.267,50.524 113.131,49.632C111.996,48.74 111.104,47.523 110.536,46.145L110.536,39.9C110.78,39.332 111.023,38.846 111.428,38.44C111.834,37.954 112.32,37.467 112.888,37.062C113.456,36.656 114.023,36.413 114.672,36.17C116.375,35.602 117.916,35.845 119.214,36.413C120.025,36.818 120.755,37.305 121.403,37.954C122.052,38.603 122.539,39.414 122.863,40.306C123.187,41.36 123.35,42.333 123.35,43.387ZM355.533,43.063C355.695,43.063 355.776,43.144 355.695,43.225L355.695,45.82C355.695,45.901 355.614,45.982 355.533,45.982L352.937,45.982C352.856,45.982 352.775,45.901 352.775,45.82L352.775,43.225C352.775,43.144 352.856,43.063 352.937,43.063L355.533,43.063ZM296.575,17.679C296.98,17.679 297.385,18.004 297.385,18.49L297.385,25.627C297.385,26.113 297.061,26.438 296.575,26.438L289.438,26.438C288.951,26.438 288.627,26.113 288.627,25.627L288.627,18.49C288.627,18.004 288.951,17.679 289.438,17.679L296.575,17.679Z" />
            </svg>
          </a>
          <button className="btn btn-lg btn-success">Load data package</button>
        </div>

        <div className="panel-group" id="package-data" role="tablist" aria-multiselectable="true">

          {/* Required metadata */}
          <div className="panel">
            <div className="panel-heading" role="tab" id="required-metadata-heading">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#package-data" href="#required-metadata" aria-expanded="false" aria-controls="required-metadata">
                  <span className="text">Required metadata </span><span className="icon"><svg><use xlinkHref="#icon-expand" /></svg></span>
                </a>
              </h4>
            </div>
            <div id="required-metadata" className="panel-collapse collapse" role="tabpanel" aria-labelledby="optional-metadata-heading">
              <div className="panel-body">

                {/* Title */}
                <label className="control-label">Title</label>
                <input
                  className="form-control"
                  name="root[title]"
                  type="text"
                  value={descriptor.title}
                  onChange={(event) => {
                    updatePackage({
                      type: 'UPDATE_PACKAGE',
                      descriptor: {title: event.target.value}
                    })
                  }}
                />

                {/* Profile */}
                <label className="control-label">Profile</label>
                <select
                  data-id="list-container"
                  className="form-control list-container"
                  autoComplete="off"
                  value={descriptor.profile}
                  onChange={(event) => {
                    updatePackage({
                      type: 'UPDATE_PACKAGE',
                      descriptor: {profile: event.target.value}
                    })
                  }}
                >
                  <option value="data-package">Data Package</option>
                  <option value="tabular-data-package">Tabular Data Package</option>
                  <option value="fiscal-data-package">Fiscal Data Package</option>
                </select>

              </div>
            </div>
          </div>

          {/* Optional metadata */}
          <div className="panel">
            <div className="panel-heading" role="tab" id="optional-metadata-heading">
              <h4 className="panel-title">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#package-data" href="#optional-metadata" aria-expanded="false" aria-controls="optional-metadata">
                  <span className="text">Optional metadata </span><span className="icon"><svg><use xlinkHref="#icon-expand" /></svg></span>
                </a>
              </h4>
            </div>
            <div id="optional-metadata" className="panel-collapse collapse" role="tabpanel" aria-labelledby="optional-metadata-heading">
              <div className="panel-body">

                {/* Name */}
                <label className="control-label">Name</label>
                <input
                  className="form-control"
                  pattern="^([a-z0-9._-])+$"
                  name="root[name]"
                  type="text"
                  value={descriptor.name}
                  onChange={(event) => {
                    updatePackage({
                      type: 'UPDATE_PACKAGE',
                      descriptor: {name: event.target.value}
                    })
                  }}
                />

                {/* Description */}
                <label className="control-label">Description</label>
                <textarea className="form-control"
                  data-schemaformat="textarea"
                  name="root[description]"
                  value={descriptor.description}
                  onChange={(event) => {
                    updatePackage({
                      type: 'UPDATE_PACKAGE',
                      descriptor: {description: event.target.value}
                    })
                  }}
                />

                {/* Home Page */}
                <label className="control-label">Home Page</label>
                <input
                  className="form-control"
                  name="root[homepage]"
                  type="text"
                  value={descriptor.homepage}
                  onChange={(event) => {
                    updatePackage({
                      type: 'UPDATE_PACKAGE',
                      descriptor: {homepage: event.target.value}
                    })
                  }}
                />

                {/* Version */}
                <label className="control-label">Version</label>
                <input
                  className="form-control"
                  name="root[version]"
                  type="text"
                  value={descriptor.version}
                  onChange={(event) => {
                    updatePackage({
                      type: 'UPDATE_PACKAGE',
                      descriptor: {version: event.target.value}
                    })
                  }}
                />

                {/* License */}
                <label className="control-label">License</label>
                <input
                  className="form-control"
                  name="root[license]"
                  type="text"
                  value={descriptor.license}
                  onChange={(event) => {
                    updatePackage({
                      type: 'UPDATE_PACKAGE',
                      descriptor: {license: event.target.value}
                    })
                  }}
                />

                {/* Author */}
                <label className="control-label">Author</label>
                <input
                  className="form-control"
                  name="root[author]"
                  type="text"
                  value={descriptor.author}
                  onChange={(event) => {
                    updatePackage({
                      type: 'UPDATE_PACKAGE',
                      descriptor: {author: event.target.value}
                    })
                  }}
                />

              </div>
            </div>
          </div>

          {/* Keywords */}
          <EditorKeywords
            keywords={descriptor.keywords}
            updatePackage={updatePackage}
          />

        </div>

        <div className="validate-download">

          {/* Download */}
          <button
            className="btn btn-lg btn-success"
            onClick={(event) => {
              updatePackage({
                type: 'DOWNLOAD',
              })
            }}
          >
            Download
          </button>

          {/* Validate */}
          <button
            className="btn btn-lg btn-info"
            onClick={(event) => {
              updatePackage({
                type: 'VALIDATE',
              })
            }}
          >
            Validate
          </button>

        </div>

      </div>
    </section>
  )
}


// System

module.exports = {
  EditorMenu,
}
