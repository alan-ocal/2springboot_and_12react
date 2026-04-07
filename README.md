# BISMILLAHARIHRAHMARIRAHIM - Data Fetching
# KUNYE
## REF 
- [1_TanStack Query]_[youtube_devworld]https://www.youtube.com/watch?v=BD_SeOOD3t4
- [1_TanStack Query]_[burgstaller]https://burgstaller.dev/blog/
- [1_TanStack Query] [medium_sakshi] https://medium.com/@sakshijaiswal0310/server-side-table-operations-made-simple-react-tanstack-spring-boot-9fa89291fbb1
<!--------------->
- [1_TanStack Query](#1_TanStack Query)
   - [1.1_Core_Stack_Components](#11_Core_Stack_Components)
   - [1.2_Essential TanStack Libraries for this Stack](#12Essential TanStack Libraries for this Stack)
<!--------------->

# 1_TanStack_Query
Combining TanStack (a suite of open-source headless UI and data tools) with a `Spring Boot backend` and `React frontend`
is a modern architecture for building scalable, type-safe full-stack applications.

## 1.1_Core_Stack_Components
- [Spring Boot (Backend)]: Serves as the robust, secure server for business logic and data persistence.
  It typically exposes REST APIs or uses `Spring Data REST to provide paginated and sorted data`.

- [React (Frontend Library)]: Handles the UI and component lifecycle.
- [TanStack Ecosystem (The "Glue")]: These libraries Bridge the gap between React's UI and Spring Boot's data

## 1.2_Essential TanStack Libraries for this Stack
[TanStack Query (React Query)]: The most critical piece. It manages "server state" by fetching, caching, and synchronizing data from Spring Boot APIs. It handles complex tasks like optimistic updates and automatic background refetching.
TanStack Router: A fully type-safe router for React. It integrates deeply with TanStack Query to pre-load data before a route even renders.
TanStack Table: A headless utility for building complex data grids. It is commonly used with Spring Boot to implement server-side pagination, sorting, and filtering for datasets with millions of records.
