import { Bubble } from 'react-chartjs-2';

export default function BubbleChart({chartData}){
    return <Bubble
    options={{

        responsive:true,



        plugins:{
            legend:false
        }


    }}

    data={{
        datasets:[

            {data:[{
                x: 0,
                y: 0,
                r: 15
              }, {
                x: 20,
                y: 1,
                r: 8,
              }, {
                x: 70,
                y: 3,
                r: 12,
              }, {
                x: 70,
                y: 5,
                r: 20,
                
              }],
            
          backgroundColor: 'purple'

            
            }

        ]
    }}


    // data={chartData}

  />
}
