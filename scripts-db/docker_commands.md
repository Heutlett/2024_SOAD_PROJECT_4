# Create the container

```
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Admin1234!" -p 1433:1433 --name sqlserver -d mcr.microsoft.com/mssql/server:2017-latest
```

# Start container

```
docker start sqlserver
```

# Copy scripts

```
docker cp creation.sql sqlserver:/creation.sql
```

```
docker cp population.sql sqlserver:/population.sql
```

# Run commands

```
docker exec -it sqlserver /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P Admin1234! -i /creation.sql
```

```
docker exec -it sqlserver /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P Admin1234! -i /population.sql
```

# Consultas

```
sqlcmd -S localhost -U SA -P Admin1234!
```

## Seleccionar todas las filas de la tabla Restaurants

```
SELECT * FROM Restaurants;
GO
```

## Seleccionar todas las filas de la tabla Food

```
SELECT * FROM Food;
GO
```

## Seleccionar todas las filas de la tabla Food_Type_Association

```
SELECT * FROM Food_Type_Association;
GO
```

## Seleccionar todas las filas de la tabla User\_

```
SELECT * FROM User_;
GO
```

## Seleccionar todas las filas de la tabla User_Type_Association

```
SELECT * FROM User_Type_Association;
GO
```

## Seleccionar todas las filas de la tabla Tables

```
SELECT * FROM Tables;
GO
```

## Seleccionar todas las filas de la tabla Reservations

```
SELECT * FROM Reservations;
GO
```

## Seleccionar todas las filas de la tabla Table_Availability

```
SELECT * FROM Table_Availability;
GO
```

## Seleccionar todas las filas de la tabla Reservation_Tables_Association

```
SELECT * FROM Reservation_Tables_Association;
GO
```

## Seleccionar todas las filas de la tabla Recommendation

```
SELECT * FROM Recommendation;
GO
```
