import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="134" cy="136" r="126" /> 
    <rect x="0" y="290" rx="10" ry="10" width="280" height="23" /> 
    <rect x="0" y="336" rx="10" ry="10" width="280" height="105" /> 
    <rect x="187" y="373" rx="0" ry="0" width="1" height="0" /> 
    <rect x="0" y="456" rx="10" ry="10" width="95" height="30" /> 
    <rect x="125" y="457" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton