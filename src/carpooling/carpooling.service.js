const carpoolings = [{ 
  id: 1,
  departurePlace: 'Lannion',
  arrivalPlace: 'CESI-BREST',
  departureTime: new Date(),
  seats: 4,
  driverName: 'Sven',
  status: 'open',
  carpoolers: [{carpoolerName: 'Test', status: 'accepted'}]
}];

export const fetchCarpoolings = () => carpoolings;

export const createCarpooling = (carpooling) => {
  const id = carpoolings.length + 1;
  const departureTime = new Date();
  carpoolings.push({ id, departureTime, ...carpooling });

  return carpoolings[id - 1];
};

export const deleteCarpooling = (id) => {
  const deletedCarpooling = carpoolings[id -1];
  carpoolings.splice(id -1, 1);
  
  return deletedCarpooling;
};