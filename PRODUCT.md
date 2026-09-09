# Product

<!-- impeccable:product-schema 1 -->

## Platform
web

## Users
Gestores de importación y personal operativo en Cuba que operan el ciclo completo de importación: desde contenedor marítimo (lifecycle 9 estados) hasta catalogación, ficha de costo CUP/USD, venta en POS, dispatch e inventario. Trabajan en almacén central, tienda y caja, con trazabilidad hasta contenedor de origen. El administrador gestiona accesos y permisos RBAC. Audiencias secundarias: gerencia/logística/compras (viewer/gerencia) que consumen dashboard y reportes.

## Product Purpose
ImportControl es la plataforma de gestión integral que reemplaza Excel y papel con una fuente única de verdad en tiempo real para todo el ciclo de importación en Cuba. Existe para dar visibilidad del viaje del contenedor, calcular rentabilidad real por producto en doble moneda y cerrar caja sin perder trazabilidad. Éxito = cada importación visible, cada costo trazable, caja cuadrada y dashboard que refleja la foto completa del negocio sin recalcular historia con tasa de hoy.

## Positioning
El único sistema que combina tracking de contenedores con eventos logísticos + costeo dual CUP/USD con snapshot de tasa por operación + rentabilidad real en % y monto + POS offline-first (SyncVersion, PosDevice, idempotencia por operation_id) + Feature Flags por módulo, pensado específicamente para la realidad cubana de doble moneda y fluctuación cambiaria. Ningún Excel de una moneda ni sistema genérico de inventario replica ese costeo inmutable y trazable de punta a punta.

## Operating Context
Flujo end-to-end: Contenedor marítimo → Puerto y Aduana (BL, factura, declaración aduanal) → Transporte y Almacén (Central → Tienda) → Catalogación y Ficha de Costo (CUP/USD, Tipo 1/2) → Venta/POS (turnos, arqueo, tickets consecutivos por turno, precios por punto, retiros) → Inventario (consumos, pérdidas, donaciones con snapshot a costo) → Dashboard. Operación en tienda/almacén con conectividad intermitente, digitación masiva por planillas (Consolidación por Cajas borrador→confirmado→procesado) y entregas formales vía Dispatch (caja→almacén). Herramientas y artefactos: contenedores, productos, fichas de costo, gastos internos, tasas CUP/USD, clientes, documentos tipificados, chat operativo, asistente IA sin persistencia, auditoría append-only.

## Capabilities and Constraints
Capacidades confirmadas (landing refleja 19 módulos con copy literal, no se inventan): Contenedores, Productos, Fichas de Costo, Gastos Internos, Tasas de Cambio, Ventas, Clientes, POS, Almacén POS, Consolidación por Cajas, Dispatch, Inventario, Documentos, Dashboard (8 secciones, 12 gráficos Chart.js en app real), Comunicación, Asistente IA (~25 intents por reglas), Auditoría (antes/después JSON), Usuarios/RBAC (admin, logística, compras, gerencia, viewer, cajera, jefe, despacho), Core/Feature Flags + POS API offline-first. Stack real de la app (referencia, NO se construye aquí): Django REST Framework + Vue 3 SPA + Bootstrap 5 + Chart.js. Restricción de la landing: Astro + Tailwind, estática por defecto, IBM Plex Sans/Mono self-hosted, sin UI kits externos, sin backend/login funcional, datos mock marcados como ejemplo.

## Brand Commitments
Nombre: ImportControl · Plataforma de gestión integral. Verde de marca #107C10 (mismo verde POS real). Paleta confirmada: Success #107C10, Warning #B45E00, Danger #C93434, Info #0078D4, Superficie #FFFFFF, Borde #E8E6E4, Fondo #F3F6F2, texto primario #1A1A1A. Voz: editorial premium, "el dato manda", directo, sin jerga inventada. Estilo incumbente: Fluent Design modernizado, no plantilla SaaS genérica. Compromiso de idioma: toda la UI en español.

## Evidence on Hand
Capturas reales en `capturas/` (12 PNG): login.png, dashboard.png, dashboard1.png, dashboard ventas.png, contenedores.png, detalles del contenedor.png, productos.png, detalles del producto.png, fichas costo.png, detalle ficha costo.png, ventas.png, clientes.png — usadas como referencia visual para KPI tiles (46px, barra 3px gradiente, mono), badges/pills 9999px, tablas con columnas numéricas en mono. Landing actual en `src/pages/index.astro` con 9 secciones (Hero, Problema→Solución, Cómo funciona 6 pasos, Módulos, Doble Moneda, POS, Dashboard preview, Tecnología, CTA) y build verde (`npm run build` sin warnings TS).

## Product Principles
1. Trazabilidad total — cada stock, venta y gasto remite a su contenedor y tasa snapshot; nada se recalcula.
2. Rentabilidad real antes que volumen — el costo dual y gastos operativos prorrateados deciden el precio.
3. Operar sin conexión — la caja y el despacho no se detienen; sincronización idempotente.
4. Modular pero atómico — Feature Flags permiten apagar un módulo sin romper el flujo end-to-end.
5.Dato como protagonista visual — números y KPIs en IBM Plex Mono mandan sobre decoración.

## Accessibility & Inclusion
Landsing debe ser WCAG AA (contraste, focus-visible, skip-link, prefers-reduced-motion, alt en imágenes, navegación por teclado, 16px base, responsive 16px mobile/24px desktop, header 52px sticky con drawer). Plataforma web en español (og:locale es_ES), pensada para gestores con uso intensivo en tienda/almacén.
