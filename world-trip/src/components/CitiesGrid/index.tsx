import { useEffect, useState } from 'react';
import { SimpleGrid } from "@chakra-ui/react";
import { api } from '../../services/api';
import CityCard from '../CityCard';


interface CitiesGridProps {
    continentID: number;
}

interface City {
    city_id: number;
    thumbnail: string;
    name: string;
    country: string;
    flag: string;
}

export function CitiesGrid({continentID}: CitiesGridProps) {
    const [cities, setCities] = useState<City[]>([]);
    useEffect(() => {
        async function loadCities() {
            const path = 'cities/?continent=' + continentID
            const response = await api.get(path).then(response => response.data)
            setCities(response);
        }
        loadCities()
    }, [])

    return(
        <SimpleGrid minChildWidth="250px" gap="4">
            {cities.map(city => (
            <CityCard
                key={city.city_id}
                thumbnail={city.thumbnail}
                name={city.name}
                country={city.country}
                flag={city.flag} 
            />
            ))}
        </SimpleGrid>
    )
}