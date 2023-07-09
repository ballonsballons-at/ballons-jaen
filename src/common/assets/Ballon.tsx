import React from 'react'
import { isChrome } from '../utils'
import { chakra } from '@chakra-ui/react'

export const Ballon = (props: any) => {
  return (
    <chakra.svg
      filter="drop-shadow(1px 2px 2px rgb(0 0 0 / 0.1))"
      xmlns="http://www.w3.org/2000/svg"
      height={148}
      viewBox="0 0 250 400"
      {...props}>
      <path
        id="balloon"
        fill="#E3000F"
        d="M 104.75,25.55
           C 109.90,26.25 118.10,28.35 123.25,30.35
             152.60,41.60 175.25,67.10 183.50,98.20
             186.20,108.45 186.70,112.60 186.70,126.00
             186.75,140.05 186.10,145.45 183.00,157.80
             178.90,173.90 172.05,188.50 162.85,200.75
             159.10,205.70 150.20,214.60 146.35,217.20
             144.80,218.30 143.60,219.25 143.70,219.35
             143.80,219.45 145.15,219.20 146.80,218.75
             152.10,217.40 157.80,218.00 157.40,219.90
             157.30,220.45 156.85,220.70 156.25,220.55
             153.50,220.00 148.45,220.40 145.00,221.45
             140.00,223.00 133.35,225.55 133.70,225.85
             133.80,226.00 136.30,227.05 139.20,228.25
             147.35,231.55 153.00,235.15 153.00,237.05
             153.00,238.45 151.80,238.20 149.95,236.50
             149.05,235.70 146.80,234.25 145.00,233.30
             141.05,231.20 132.95,227.90 132.60,228.25
             132.45,228.35 135.10,231.15 138.40,234.45
             143.85,239.90 144.35,240.50 143.60,241.15
             142.35,242.20 140.20,243.20 136.40,244.45
             136.40,244.45 133.00,245.60 133.00,245.60
             133.00,245.60 133.30,248.95 133.30,248.95
             133.70,253.35 132.85,258.40 131.00,262.00
             130.20,263.60 127.30,268.30 124.60,272.40
             119.20,280.60 117.40,284.50 116.45,289.75
             114.75,299.60 119.35,311.35 128.50,320.55
             136.85,328.95 146.90,334.55 173.25,345.45
             190.80,352.70 194.00,354.15 199.60,357.45
             206.40,361.45 210.15,365.65 210.60,369.75
             210.70,370.95 210.55,371.25 209.75,371.25
             209.05,371.25 208.70,370.80 208.45,369.60
             207.20,363.40 198.85,358.25 173.45,347.80
             148.05,337.35 138.25,332.20 129.05,324.45
             120.40,317.10 114.00,304.20 114.00,294.05
             114.00,286.60 116.40,280.65 124.30,268.75
             130.10,260.05 131.10,257.45 131.05,251.25
             131.05,248.90 130.95,246.80 130.80,246.60
             130.65,246.35 128.65,246.60 126.40,247.10
             122.25,248.05 111.90,248.60 111.20,247.90
             111.05,247.70 112.00,244.45 113.45,240.65
             115.15,236.10 115.90,233.35 115.70,232.60
             115.50,231.85 115.70,231.15 116.25,230.50
             116.75,229.95 117.05,229.40 116.90,229.25
             116.80,229.10 114.00,228.90 110.70,228.80
             100.10,228.40 91.10,226.00 80.25,220.75
             46.90,204.60 20.00,167.50 14.75,130.45
             13.80,123.60 13.80,110.50 14.80,103.45
             20.15,64.90 46.75,33.65 80.25,26.40
             85.50,25.25 99.20,24.80 104.75,25.55 Z"
      />
    </chakra.svg>
  )
}

export const HBallon = (props: any) => {
  return (
    <chakra.svg
      filter="drop-shadow(1px 2px 2px rgb(0 0 0 / 0.1))"
      xmlns="http://www.w3.org/2000/svg"
      height={148}
      viewBox="0 0 250 400"
      {...props}>
      <path
        id="balloon"
        fill="#E3000F"
        d="M 175.85,206.42
           C 198.05,186.12 208.59,171.32 221.58,148.76
             238.99,118.52 245.58,89.96 240.92,64.74
             236.89,42.88 221.71,23.94 202.21,16.57
             197.86,14.92 188.51,13.02 183.38,12.74
             171.09,12.05 161.39,14.48 150.94,20.83
             139.68,27.64 131.80,36.49 125.56,49.35
             123.35,53.86 123.00,54.94 120.57,64.68
             118.82,71.51 117.83,74.99 117.58,74.75
             117.37,74.57 115.64,72.67 113.65,70.57
             101.15,57.15 86.94,49.06 71.79,46.80
             56.48,44.50 44.50,46.92 31.82,54.88
             19.59,62.61 11.33,72.84 6.69,86.05
             2.96,96.67 2.31,108.50 4.73,120.31
             7.06,131.45 12.60,142.92 21.18,154.14
             27.57,162.53 40.89,174.76 51.27,181.86
             76.81,199.22 104.96,207.97 144.51,216.19
             144.51,216.19 147.17,216.51 147.25,218.33
             147.14,220.42 147.05,220.36 146.81,221.63
             146.36,223.76 145.76,225.92 144.25,229.55
             142.81,233.18 141.83,236.35 142.06,236.57
             142.81,237.34 152.34,236.88 156.95,235.90
             159.37,235.44 161.64,235.22 161.86,235.52
             162.77,236.43 162.39,245.27 161.34,247.99
             160.73,249.43 157.78,254.41 154.76,259.03
             148.41,268.63 146.59,272.48 145.31,278.91
             144.10,285.11 145.38,291.99 149.24,299.93
             156.42,314.89 169.65,323.96 205.86,338.70
             229.52,348.38 238.51,353.82 240.93,359.87
             242.22,363.12 243.66,363.87 243.66,361.38
             243.66,354.20 233.30,347.40 204.35,335.68
             188.85,329.40 176.46,323.43 169.57,318.90
             158.69,311.87 150.83,301.36 147.95,290.25
             145.61,281.25 147.73,273.77 156.12,260.99
             163.60,249.73 164.59,247.31 164.66,240.13
             164.66,240.13 164.74,234.16 164.74,234.16
             164.74,234.16 168.59,232.80 168.59,232.80
             173.28,231.21 175.62,230.00 175.62,229.17
             175.62,228.79 172.97,225.92 169.80,222.82
             166.55,219.64 164.13,216.92 164.28,216.78
             164.97,216.09 178.11,222.22 181.06,224.56
             184.09,226.98 185.67,227.06 184.24,224.71
             182.88,222.59 177.44,219.27 170.86,216.62
             170.86,216.62 164.66,214.13 164.66,214.13
             164.66,214.13 168.29,212.54 168.29,212.54
             174.41,209.89 180.31,208.45 184.84,208.45
             189.08,208.53 190.29,207.93 188.32,206.72
             187.11,205.96 180.39,206.19 177.13,207.10
             177.13,207.10 174.48,207.85 174.48,207.85
             174.48,207.85 175.85,206.42 175.85,206.42 Z"
      />
    </chakra.svg>
  )
}
