export default async function WeatherInfo() {
    return (
        <div className="p-4 bg-blue-100 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Current Weather</h2>
            <p className="text-gray-700">Temperature: (Loading Temperature...)°C</p>
            <p className="text-gray-700">Condition: (Loading weather condition...)</p>
        </div>  
    );
}
