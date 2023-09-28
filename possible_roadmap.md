### API ideas for microservice-1
 - consume nextbus API data, polling from 3 consecutive stop groupings in order to determine the speed the bus takes to traverse
 that and returns said speed. also provide historical data.
    - fool's goal: archive historical data of the whole network
        - its thus bc: from walks, some nodes have different significance than others. But not archieving the whole network, i lose the nodes that can have different significances (ie: a bus stop in between two significant stops can detect cases of bottlenecks [i need
        a special data structure that allows only write on change but this wont solve the problem of querying nextbus unnecessarily])

- also an api that returns when the moment of daily min/max temperature occurs.
    - what api provider? 
