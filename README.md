# BISMILLAHARIHRAHMARIRAHIM - Data Fetching
# KUNYE
## REF 
- [1_TanStack Query]_[youtube_devworld]https://www.youtube.com/watch?v=BD_SeOOD3t4
- [1_TanStack Query]_[burgstaller]https://burgstaller.dev/blog/
- [1_TanStack Query] [medium_sakshi] https://medium.com/@sakshijaiswal0310/server-side-table-operations-made-simple-react-tanstack-spring-boot-9fa89291fbb1
-                                    https://github.com/sakshi-jaiswal03/Serverside-Table-Operations/tree/master
-                                    https://github.com/sakshi-jaiswal03/Springbootprojh2/tree/main  
- [1_TanStack Query] [medium_ashishgarg] https://medium.com/@ashishgarg.bme/simplifying-data-fetching-with-tanstack-query-axios-vs-fetch-6632cf481530
<!--------------->
- [1_TanStack Query](#1_TanStack Query)
   - [1.1_Core_Stack_Components](#11_Core_Stack_Components)
   - [1.2_Essential TanStack Libraries for this Stack](#12Essential TanStack Libraries for this Stack)
- [2_Implementation Workflow] (#2_Implementation Workflow)
   - [Backend_Architecture](#Backend_Architecture)
   - [Frontend_Architecture](#Frontend_Architecture)
     - [01_Custom Hook](#01_Custom Hook)
          [Data_Fetching](#Data_Fetching]
     - [02_Foodbank Table Component](#02_Foodbank Table Component)

  
   <!--------------->

# 1_TanStack_Query
Combining TanStack (a suite of open-source headless UI and data tools) with a `Spring Boot backend` and `React frontend`
is a modern architecture for building scalable, type-safe full-stack applications.
TanStack Query is a data synchronization and state management solution for React. It helps you fetch, cache, and update data seamlessly.
Here’s the key: TanStack Query doesn’t care how you fetch your data — as long as you return a Promise.
## 1.1_Core_Stack_Components
- [Spring Boot (Backend)]: Serves as the robust, secure server for business logic and data persistence.
  It typically exposes REST APIs or uses `Spring Data REST to provide paginated and sorted data`.

- [React (Frontend Library)]: Handles the UI and component lifecycle.
- [TanStack Ecosystem (The "Glue")]: These libraries Bridge the gap between React's UI and Spring Boot's data

## 1.2_Essential TanStack Libraries for this Stack
[TanStack Query (React Query)]: The most critical piece. It manages "server state" by fetching, caching, and 
synchronizing data from Spring Boot APIs. It handles complex tasks like optimistic updates and automatic background refetching.
[TanStack Router]: A fully type-safe router for React. It integrates deeply with TanStack Query to pre-load data before a route even renders.
[TanStack Table]: A headless utility for building complex data grids. It is commonly used with Spring Boot to 
implement server-side pagination, sorting, and filtering for datasets with millions of records.

# 2_Implementation Workflow
## Backend_Architecture
### 01_Database_Foundation
### 02_FoodBankEntity_Data_Model
### 03_Dynamic Filtering with JPA Specifications
### 04_Repository
### 05_Service Layer 
### 06_Controller
- [1_API Development]: Create REST controllers in Spring Boot to expose data entities (e.g., GET /api/foodbanks).
<img width="836" height="372" alt="image" src="https://github.com/user-attachments/assets/d5d0ca98-9bbc-4643-a8db-81084532f9c2" />

## Frontend _Architecture
### 01_Custom Hook
<img width="852" height="782" alt="image" src="https://github.com/user-attachments/assets/5e9f8dc3-d361-45c2-8791-357847ddb4bf" />

- [2-Data Fetching]:
<img width="832" height="648" alt="image" src="https://github.com/user-attachments/assets/7c1161a2-a2d3-4717-9760-899910d176b0" />

- [4-State Management]: useState, useEffect, useCallback
### 02_Foodbank Table Component
use @tanstack/react-table
- [5-Complex UI]: Use TanStack Table to display the fetched data, passing pagination states back to the Spring Boot backend as query parameters.
- <img width="422" height="221" alt="image" src="https://github.com/user-attachments/assets/a3f776d8-0b1d-43f2-af04-5601c02af46a" />

Foodbank Table
<img width="1422" height="567" alt="image" src="https://github.com/user-attachments/assets/490e35b8-2a15-4fa5-ac34-f5df0dfe1ee1" />




















