-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2023 at 11:56 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookmyshow`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` bigint(20) NOT NULL,
  `transactionId` varchar(250) DEFAULT NULL,
  `cityId` bigint(20) DEFAULT NULL,
  `theatreId` bigint(20) DEFAULT NULL,
  `movieId` bigint(20) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `timing` time DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `paymentStatus` enum('Process','Complete','Pending','Cancelled') DEFAULT 'Process',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `transactionId`, `cityId`, `theatreId`, `movieId`, `date`, `timing`, `amount`, `paymentStatus`, `createdAt`, `updatedAt`) VALUES
(1, 'bac2bab6-b640-4eeb-b03b-913b915901c9', 7, 1, 1, '2023-08-25', '10:00:00', 1500, 'Complete', '2023-08-20 09:23:05', '2023-08-20 11:47:58'),
(5, '46d66965-2be0-4091-843d-e5729bfe4d55', 7, 1, 1, '2023-08-25', '10:00:00', 1000, 'Complete', '2023-08-20 11:53:49', '2023-08-20 11:56:09'),
(6, 'ef386a25-c3f0-4c0b-91df-6c0480ea6262', 7, 1, 1, '2023-08-25', '10:00:00', 1000, 'Complete', '2023-08-20 11:54:31', '2023-08-26 06:00:27');

-- --------------------------------------------------------

--
-- Table structure for table `bookingssheets`
--

CREATE TABLE `bookingssheets` (
  `id` bigint(20) NOT NULL,
  `bookingId` bigint(20) DEFAULT NULL,
  `showId` bigint(20) DEFAULT NULL,
  `screenId` bigint(20) DEFAULT NULL,
  `row` varchar(10) DEFAULT NULL,
  `sheetNumber` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookingssheets`
--

INSERT INTO `bookingssheets` (`id`, `bookingId`, `showId`, `screenId`, `row`, `sheetNumber`) VALUES
(1, 1, 1, 1, 'A', 1),
(2, 1, 1, 1, 'A', 2),
(3, 1, 1, 1, 'A', 3),
(12, 5, 1, 1, 'A', 6),
(13, 5, 1, 1, 'A', 7),
(14, 6, 1, 1, 'A', 8),
(15, 6, 1, 1, 'A', 9);

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `name`) VALUES
(1, 'Delhi'),
(2, 'Mumbai'),
(3, 'Banglore'),
(4, 'Hyderabad'),
(5, 'Gurugram'),
(6, 'Noida'),
(7, 'Ghaziabad'),
(8, 'Bulandshahar'),
(9, 'Aligarh'),
(10, 'Haridwar'),
(11, 'Mathura'),
(13, 'Chandigarh'),
(14, 'Agra'),
(15, 'Meerut'),
(16, 'Jaipur'),
(17, 'Udaipur'),
(18, 'Gwalior'),
(19, 'Guwahati'),
(20, 'Goa'),
(21, 'Bhopal'),
(22, 'Indore'),
(23, 'Nagpur'),
(24, 'Panipat'),
(25, 'Kanpur');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(3000) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `languages` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `name`, `description`, `price`, `languages`) VALUES
(1, 'Rocky Aur Rani Kii Prem Kahaani', 'Rocky Aur Rani Kii Prem Kahaani magnifies the power of love, embraces the complexities of relationships, and celebrates the beauty of both perfect and imperfect families.', 250, 'Hindi'),
(2, 'Gadar 2', 'Gadar II brings back India`s most loved family of Tara, Sakeena and Jeete; 22 years after its predecessor. Set against the backdrop of Indo-Pakistan war of 1971, Tara Singh, once again, will face every enemy to protect the honor of country and family.', 350, 'Hindi'),
(3, 'OMG 2', 'Life is bliss until one day Kanti Sharan Mudgal`s son Vivek is blamed for immoral conduct and expelled from school. Overwhelmed, Kanti plans to leave town until a divine intervention leads him to seek justice by taking those responsible to court.', 450, 'Hindi, English');

-- --------------------------------------------------------

--
-- Table structure for table `screens`
--

CREATE TABLE `screens` (
  `id` bigint(20) NOT NULL,
  `theatreId` bigint(20) DEFAULT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `screens`
--

INSERT INTO `screens` (`id`, `theatreId`, `name`) VALUES
(1, 1, 'Audi 1'),
(2, 1, 'Audi 2'),
(3, 2, 'Audi 1'),
(4, 2, 'Audi 2'),
(5, 3, 'Audi 1'),
(6, 3, 'Audi 2'),
(7, 4, 'Audi 1'),
(8, 4, 'Audi 2'),
(9, 5, 'Audi 1'),
(10, 5, 'Audi 2'),
(11, 6, 'Audi 1'),
(12, 6, 'Audi 2'),
(13, 7, 'Audi 1'),
(14, 7, 'Audi 2'),
(15, 8, 'Audi 1'),
(16, 8, 'Audi 2'),
(19, 10, 'Audi 1'),
(20, 10, 'Audi 2'),
(21, 11, 'Audi 1'),
(22, 11, 'Audi 2');

-- --------------------------------------------------------

--
-- Table structure for table `shows`
--

CREATE TABLE `shows` (
  `id` bigint(20) NOT NULL,
  `screenId` bigint(20) DEFAULT NULL,
  `movieId` bigint(20) DEFAULT NULL,
  `price` float NOT NULL,
  `date` date DEFAULT NULL,
  `timing` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shows`
--

INSERT INTO `shows` (`id`, `screenId`, `movieId`, `price`, `date`, `timing`) VALUES
(1, 1, 1, 500, '2023-08-31', '14:47:00'),
(2, 2, 2, 650, '2023-08-31', '10:15:00'),
(3, 1, 3, 750, '2023-08-31', '01:00:00'),
(4, 2, 1, 550, '2023-08-18', '01:15:00');

-- --------------------------------------------------------

--
-- Table structure for table `theatres`
--

CREATE TABLE `theatres` (
  `id` bigint(20) NOT NULL,
  `cityId` bigint(20) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `theatres`
--

INSERT INTO `theatres` (`id`, `cityId`, `name`, `address`) VALUES
(1, 7, 'East Delhi Mall', 'Kaushambi, Ghaziabad, 201010'),
(2, 7, 'Pacific Mall', 'Sahibabad, Ghaziabad, 201010'),
(3, 7, 'PVR EDM', 'Kaushambi, Ghaziabad, 201010'),
(4, 7, 'Wave Cinemas', 'Kaushambi, Ghaziabad, 201010'),
(5, 1, 'Short movies', 'Ganesh Nagar, Delhi, 110092'),
(6, 1, 'PVR Plaza', 'Connaught Place, Delhi, 110001'),
(7, 1, 'Satyam Cineplexes', 'Patel Nagar, Delhi, 110008'),
(8, 1, 'PVR Janakpuri', 'Janakpuri, Delhi, 110058'),
(10, 1, 'PVR Premiere', 'Saket, Delhi, 110017'),
(11, 1, 'PVR Fun City Mall', 'Rohini, Delhi, 1100852'),
(52, 7, 'Wave Cinemas: Gaur Central Mall, RDC', 'RDC, Raj Nagar, Ghaziabad, NCR 201002, India');

-- --------------------------------------------------------

--
-- Table structure for table `theatresheets`
--

CREATE TABLE `theatresheets` (
  `screenId` bigint(20) NOT NULL,
  `row` varchar(10) NOT NULL,
  `sheetNumber` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `theatresheets`
--

INSERT INTO `theatresheets` (`screenId`, `row`, `sheetNumber`) VALUES
(1, 'A', 1),
(1, 'A', 2),
(1, 'A', 3),
(1, 'A', 4),
(1, 'A', 5),
(1, 'A', 6),
(1, 'A', 7),
(1, 'A', 8),
(1, 'A', 9),
(1, 'A', 10),
(1, 'B', 1),
(1, 'B', 2),
(1, 'B', 3),
(1, 'B', 4),
(1, 'B', 5),
(1, 'B', 6),
(1, 'B', 7),
(1, 'B', 8),
(1, 'B', 9),
(1, 'B', 10),
(1, 'B', 11),
(1, 'B', 12),
(1, 'B', 13),
(1, 'B', 14),
(1, 'B', 15),
(1, 'C', 1),
(1, 'C', 2),
(1, 'C', 3),
(1, 'C', 4),
(1, 'C', 5),
(1, 'C', 6),
(1, 'C', 7),
(1, 'C', 8),
(1, 'C', 9),
(1, 'C', 10),
(1, 'C', 11),
(1, 'C', 12),
(1, 'C', 13),
(1, 'C', 14),
(1, 'C', 15),
(1, 'D', 1),
(1, 'D', 2),
(1, 'D', 3),
(1, 'D', 4),
(1, 'D', 5),
(1, 'D', 6),
(1, 'D', 7),
(1, 'D', 8),
(1, 'D', 9),
(1, 'D', 10),
(1, 'D', 11),
(1, 'D', 12),
(1, 'D', 13),
(1, 'D', 14),
(1, 'D', 15),
(1, 'E', 1),
(1, 'E', 2),
(1, 'E', 3),
(1, 'E', 4),
(1, 'E', 5),
(1, 'E', 6),
(1, 'E', 7),
(1, 'E', 8),
(1, 'E', 9),
(1, 'E', 10),
(1, 'E', 11),
(1, 'E', 12),
(1, 'E', 13),
(1, 'E', 14),
(1, 'E', 15),
(2, 'A', 1),
(2, 'A', 2),
(2, 'A', 3),
(2, 'A', 4),
(2, 'A', 5),
(2, 'A', 6),
(2, 'A', 7),
(2, 'A', 8),
(2, 'A', 9),
(2, 'A', 10),
(2, 'A', 11),
(2, 'A', 12),
(2, 'A', 13),
(2, 'A', 14),
(2, 'A', 15),
(2, 'A', 16),
(2, 'A', 17),
(2, 'A', 18),
(2, 'A', 19),
(2, 'A', 20),
(2, 'B', 1),
(2, 'B', 2),
(2, 'B', 3),
(2, 'B', 4),
(2, 'B', 5),
(2, 'B', 6),
(2, 'B', 7),
(2, 'B', 8),
(2, 'B', 9),
(2, 'B', 10),
(2, 'B', 11),
(2, 'B', 12),
(2, 'B', 13),
(2, 'B', 14),
(2, 'B', 15),
(2, 'B', 16),
(2, 'B', 17),
(2, 'B', 18),
(2, 'B', 19),
(2, 'B', 20),
(2, 'C', 1),
(2, 'C', 2),
(2, 'C', 3),
(2, 'C', 4),
(2, 'C', 5),
(2, 'C', 6),
(2, 'C', 7),
(2, 'C', 8),
(2, 'C', 9),
(2, 'C', 10),
(2, 'C', 11),
(2, 'C', 12),
(2, 'C', 13),
(2, 'C', 14),
(2, 'C', 15),
(2, 'C', 16),
(2, 'C', 17),
(2, 'C', 18),
(2, 'C', 19),
(2, 'C', 20),
(2, 'D', 1),
(2, 'D', 2),
(2, 'D', 3),
(2, 'D', 4),
(2, 'D', 5),
(2, 'D', 6),
(2, 'D', 7),
(2, 'D', 8),
(2, 'D', 9),
(2, 'D', 10),
(2, 'D', 11),
(2, 'D', 12),
(2, 'D', 13),
(2, 'D', 14),
(2, 'D', 15),
(2, 'D', 16),
(2, 'D', 17),
(2, 'D', 18),
(2, 'D', 19),
(2, 'D', 20),
(2, 'E', 1),
(2, 'E', 2),
(2, 'E', 3),
(2, 'E', 4),
(2, 'E', 5),
(2, 'E', 6),
(2, 'E', 7),
(2, 'E', 8),
(2, 'E', 9),
(2, 'E', 10),
(2, 'E', 11),
(2, 'E', 12),
(2, 'E', 13),
(2, 'E', 14),
(2, 'E', 15),
(2, 'E', 16),
(2, 'E', 17),
(2, 'E', 18),
(2, 'E', 19),
(2, 'E', 20),
(2, 'F', 1),
(2, 'F', 2),
(2, 'F', 3),
(2, 'F', 4),
(2, 'F', 5),
(2, 'F', 6),
(2, 'F', 7),
(2, 'F', 8),
(2, 'F', 9),
(2, 'F', 10),
(2, 'F', 11),
(2, 'F', 12),
(2, 'F', 13),
(2, 'F', 14),
(2, 'F', 15),
(2, 'F', 16),
(2, 'F', 17),
(2, 'F', 18),
(2, 'F', 19),
(2, 'F', 20),
(2, 'G', 1),
(2, 'G', 2),
(2, 'G', 3),
(2, 'G', 4),
(2, 'G', 5),
(2, 'G', 6),
(2, 'G', 7),
(2, 'G', 8),
(2, 'G', 9),
(2, 'G', 10),
(2, 'G', 11),
(2, 'G', 12),
(2, 'G', 13),
(2, 'G', 14),
(2, 'G', 15),
(2, 'G', 16),
(2, 'G', 17),
(2, 'G', 18),
(2, 'G', 19),
(2, 'G', 20),
(2, 'H', 1),
(2, 'H', 2),
(2, 'H', 3),
(2, 'H', 4),
(2, 'H', 5),
(2, 'H', 6),
(2, 'H', 7),
(2, 'H', 8),
(2, 'H', 9),
(2, 'H', 10),
(2, 'H', 11),
(2, 'H', 12),
(2, 'H', 13),
(2, 'H', 14),
(2, 'H', 15),
(2, 'H', 16),
(2, 'H', 17),
(2, 'H', 18),
(2, 'H', 19),
(2, 'H', 20),
(2, 'I', 1),
(2, 'I', 2),
(2, 'I', 3),
(2, 'I', 4),
(2, 'I', 5),
(2, 'I', 6),
(2, 'I', 7),
(2, 'I', 8),
(2, 'I', 9),
(2, 'I', 10),
(2, 'I', 11),
(2, 'I', 12),
(2, 'I', 13),
(2, 'I', 14),
(2, 'I', 15),
(2, 'I', 16),
(2, 'J', 1),
(2, 'J', 2),
(2, 'J', 3),
(2, 'J', 4),
(2, 'J', 5),
(2, 'J', 6),
(2, 'J', 7),
(2, 'J', 8),
(2, 'J', 9),
(2, 'J', 10),
(2, 'J', 11),
(2, 'J', 12),
(2, 'J', 13),
(2, 'J', 14),
(2, 'J', 15),
(2, 'J', 16),
(2, 'K', 1),
(2, 'K', 2),
(2, 'K', 3),
(2, 'K', 4),
(2, 'K', 5),
(2, 'K', 6),
(2, 'K', 7),
(2, 'K', 8),
(2, 'K', 9),
(2, 'K', 10),
(2, 'K', 11),
(2, 'K', 12),
(2, 'K', 13),
(2, 'K', 14),
(2, 'K', 15),
(2, 'K', 16),
(2, 'L', 1),
(2, 'L', 2),
(2, 'L', 3),
(2, 'L', 4),
(2, 'L', 5),
(2, 'L', 6),
(2, 'L', 7),
(2, 'L', 8),
(2, 'L', 9),
(2, 'L', 10),
(2, 'L', 11),
(2, 'L', 12),
(2, 'L', 13),
(2, 'L', 14),
(2, 'L', 15),
(2, 'L', 16),
(3, 'A', 1),
(3, 'A', 2),
(3, 'A', 3),
(3, 'A', 4),
(3, 'A', 5),
(3, 'A', 6),
(3, 'A', 7),
(3, 'A', 8),
(3, 'A', 9),
(3, 'A', 10),
(3, 'A', 11),
(3, 'A', 12),
(3, 'A', 13),
(3, 'A', 14),
(3, 'A', 15),
(3, 'A', 16),
(3, 'A', 17),
(3, 'A', 18),
(3, 'A', 19),
(3, 'A', 20),
(3, 'B', 1),
(3, 'B', 2),
(3, 'B', 3),
(3, 'B', 4),
(3, 'B', 5),
(3, 'B', 6),
(3, 'B', 7),
(3, 'B', 8),
(3, 'B', 9),
(3, 'B', 10),
(3, 'B', 11),
(3, 'B', 12),
(3, 'B', 13),
(3, 'B', 14),
(3, 'B', 15),
(3, 'B', 16),
(3, 'B', 17),
(3, 'B', 18),
(3, 'B', 19),
(3, 'B', 20),
(3, 'C', 1),
(3, 'C', 2),
(3, 'C', 3),
(3, 'C', 4),
(3, 'C', 5),
(3, 'C', 6),
(3, 'C', 7),
(3, 'C', 8),
(3, 'C', 9),
(3, 'C', 10),
(3, 'C', 11),
(3, 'C', 12),
(3, 'C', 13),
(3, 'C', 14),
(3, 'C', 15),
(3, 'C', 16),
(3, 'C', 17),
(3, 'C', 18),
(3, 'C', 19),
(3, 'C', 20),
(3, 'D', 1),
(3, 'D', 2),
(3, 'D', 3),
(3, 'D', 4),
(3, 'D', 5),
(3, 'D', 6),
(3, 'D', 7),
(3, 'D', 8),
(3, 'D', 9),
(3, 'D', 10),
(3, 'D', 11),
(3, 'D', 12),
(3, 'D', 13),
(3, 'D', 14),
(3, 'D', 15),
(3, 'D', 16),
(3, 'D', 17),
(3, 'D', 18),
(3, 'D', 19),
(3, 'D', 20),
(3, 'E', 1),
(3, 'E', 2),
(3, 'E', 3),
(3, 'E', 4),
(3, 'E', 5),
(3, 'E', 6),
(3, 'E', 7),
(3, 'E', 8),
(3, 'E', 9),
(3, 'E', 10),
(3, 'E', 11),
(3, 'E', 12),
(3, 'E', 13),
(3, 'E', 14),
(3, 'E', 15),
(3, 'E', 16),
(3, 'E', 17),
(3, 'E', 18),
(3, 'E', 19),
(3, 'E', 20),
(3, 'F', 1),
(3, 'F', 2),
(3, 'F', 3),
(3, 'F', 4),
(3, 'F', 5),
(3, 'F', 6),
(3, 'F', 7),
(3, 'F', 8),
(3, 'F', 9),
(3, 'F', 10),
(3, 'F', 11),
(3, 'F', 12),
(3, 'F', 13),
(3, 'F', 14),
(3, 'F', 15),
(3, 'F', 16),
(3, 'F', 17),
(3, 'F', 18),
(3, 'F', 19),
(3, 'F', 20),
(4, 'A', 1),
(4, 'A', 2),
(4, 'A', 3),
(4, 'A', 4),
(4, 'A', 5),
(4, 'A', 6),
(4, 'A', 7),
(4, 'A', 8),
(4, 'A', 9),
(4, 'A', 10),
(4, 'A', 11),
(4, 'A', 12),
(4, 'A', 13),
(4, 'A', 14),
(4, 'A', 15),
(4, 'A', 16),
(4, 'A', 17),
(4, 'A', 18),
(4, 'A', 19),
(4, 'A', 20),
(4, 'B', 1),
(4, 'B', 2),
(4, 'B', 3),
(4, 'B', 4),
(4, 'B', 5),
(4, 'B', 6),
(4, 'B', 7),
(4, 'B', 8),
(4, 'B', 9),
(4, 'B', 10),
(4, 'B', 11),
(4, 'B', 12),
(4, 'B', 13),
(4, 'B', 14),
(4, 'B', 15),
(4, 'B', 16),
(4, 'B', 17),
(4, 'B', 18),
(4, 'B', 19),
(4, 'B', 20),
(4, 'C', 1),
(4, 'C', 2),
(4, 'C', 3),
(4, 'C', 4),
(4, 'C', 5),
(4, 'C', 6),
(4, 'C', 7),
(4, 'C', 8),
(4, 'C', 9),
(4, 'C', 10),
(4, 'C', 11),
(4, 'C', 12),
(4, 'C', 13),
(4, 'C', 14),
(4, 'C', 15),
(4, 'C', 16),
(4, 'C', 17),
(4, 'C', 18),
(4, 'C', 19),
(4, 'C', 20),
(4, 'D', 1),
(4, 'D', 2),
(4, 'D', 3),
(4, 'D', 4),
(4, 'D', 5),
(4, 'D', 6),
(4, 'D', 7),
(4, 'D', 8),
(4, 'D', 9),
(4, 'D', 10),
(4, 'D', 11),
(4, 'D', 12),
(4, 'D', 13),
(4, 'D', 14),
(4, 'D', 15),
(4, 'D', 16),
(4, 'D', 17),
(4, 'D', 18),
(4, 'D', 19),
(4, 'D', 20),
(4, 'E', 1),
(4, 'E', 2),
(4, 'E', 3),
(4, 'E', 4),
(4, 'E', 5),
(4, 'E', 6),
(4, 'E', 7),
(4, 'E', 8),
(4, 'E', 9),
(4, 'E', 10),
(4, 'E', 11),
(4, 'E', 12),
(4, 'E', 13),
(4, 'E', 14),
(4, 'E', 15),
(4, 'E', 16),
(4, 'E', 17),
(4, 'E', 18),
(4, 'E', 19),
(4, 'E', 20),
(4, 'F', 1),
(4, 'F', 2),
(4, 'F', 3),
(4, 'F', 4),
(4, 'F', 5),
(4, 'F', 6),
(4, 'F', 7),
(4, 'F', 8),
(4, 'F', 9),
(4, 'F', 10),
(4, 'F', 11),
(4, 'F', 12),
(4, 'F', 13),
(4, 'F', 14),
(4, 'F', 15),
(4, 'F', 16),
(4, 'F', 17),
(4, 'F', 18),
(4, 'F', 19),
(4, 'F', 20),
(5, 'A', 1),
(5, 'A', 2),
(5, 'A', 3),
(5, 'A', 4),
(5, 'A', 5),
(5, 'A', 6),
(5, 'A', 7),
(5, 'A', 8),
(5, 'A', 9),
(5, 'A', 10),
(5, 'A', 11),
(5, 'A', 12),
(5, 'A', 13),
(5, 'A', 14),
(5, 'A', 15),
(5, 'A', 16),
(5, 'A', 17),
(5, 'A', 18),
(5, 'A', 19),
(5, 'A', 20),
(5, 'B', 1),
(5, 'B', 2),
(5, 'B', 3),
(5, 'B', 4),
(5, 'B', 5),
(5, 'B', 6),
(5, 'B', 7),
(5, 'B', 8),
(5, 'B', 9),
(5, 'B', 10),
(5, 'B', 11),
(5, 'B', 12),
(5, 'B', 13),
(5, 'B', 14),
(5, 'B', 15),
(5, 'B', 16),
(5, 'B', 17),
(5, 'B', 18),
(5, 'B', 19),
(5, 'B', 20),
(5, 'C', 1),
(5, 'C', 2),
(5, 'C', 3),
(5, 'C', 4),
(5, 'C', 5),
(5, 'C', 6),
(5, 'C', 7),
(5, 'C', 8),
(5, 'C', 9),
(5, 'C', 10),
(5, 'C', 11),
(5, 'C', 12),
(5, 'C', 13),
(5, 'C', 14),
(5, 'C', 15),
(5, 'C', 16),
(5, 'C', 17),
(5, 'C', 18),
(5, 'C', 19),
(5, 'C', 20),
(5, 'D', 1),
(5, 'D', 2),
(5, 'D', 3),
(5, 'D', 4),
(5, 'D', 5),
(5, 'D', 6),
(5, 'D', 7),
(5, 'D', 8),
(5, 'D', 9),
(5, 'D', 10),
(5, 'D', 11),
(5, 'D', 12),
(5, 'D', 13),
(5, 'D', 14),
(5, 'D', 15),
(5, 'D', 16),
(5, 'D', 17),
(5, 'D', 18),
(5, 'D', 19),
(5, 'D', 20),
(5, 'E', 1),
(5, 'E', 2),
(5, 'E', 3),
(5, 'E', 4),
(5, 'E', 5),
(5, 'E', 6),
(5, 'E', 7),
(5, 'E', 8),
(5, 'E', 9),
(5, 'E', 10),
(5, 'E', 11),
(5, 'E', 12),
(5, 'E', 13),
(5, 'E', 14),
(5, 'E', 15),
(5, 'E', 16),
(5, 'E', 17),
(5, 'E', 18),
(5, 'E', 19),
(5, 'E', 20);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) NOT NULL,
  `transactionId` varchar(250) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `transactionId`, `createdAt`, `updatedAt`) VALUES
(1, '13eb8ed2-3eda-4a1f-81bd-7731f7a8d3a0', '2023-08-20 09:54:40', '2023-08-20 09:54:40'),
(2, 'e948f365-4889-40b9-9724-4df31399b7af', '2023-08-20 09:55:18', '2023-08-20 09:55:18');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'abc@gmail.com', 'ABC', '$2b$10$zSQK5HWwANTTT8iLuGm6JeVXToLCzoseCrxpKGYpsh95L9GHB/LeW', '2023-08-20 12:24:46', '2023-08-20 12:24:46'),
(2, 'pqr@gmail.com', 'PQR', '$2b$10$RtS.T.QxzyIYrfh1rruQJuo5CHoQWLiYA0o9vN.pGChFZyOT7T./2', '2023-08-20 12:25:25', '2023-08-20 12:25:25'),
(3, 'xyz@gmail.com', 'XYZ', '$2b$10$miadvk38nazE3jn2C4EFNeezMiL2O2OC1wAcX0ODG.CklL.ONLvL2', '2023-08-20 12:25:40', '2023-08-20 12:25:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactionId_cityId_theatreId_movieId_date_paymentStatus` (`transactionId`,`cityId`,`theatreId`,`movieId`,`date`,`paymentStatus`);

--
-- Indexes for table `bookingssheets`
--
ALTER TABLE `bookingssheets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_sheet_combination` (`showId`,`screenId`,`row`,`sheetNumber`),
  ADD KEY `index_by_bookingId` (`bookingId`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `screens`
--
ALTER TABLE `screens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `theatreId` (`theatreId`);

--
-- Indexes for table `shows`
--
ALTER TABLE `shows`
  ADD PRIMARY KEY (`id`),
  ADD KEY `screenId` (`screenId`),
  ADD KEY `movieId` (`movieId`);

--
-- Indexes for table `theatres`
--
ALTER TABLE `theatres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `theatresheets`
--
ALTER TABLE `theatresheets`
  ADD PRIMARY KEY (`screenId`,`row`,`sheetNumber`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `bookingssheets`
--
ALTER TABLE `bookingssheets`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `screens`
--
ALTER TABLE `screens`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `shows`
--
ALTER TABLE `shows`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `theatres`
--
ALTER TABLE `theatres`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookingssheets`
--
ALTER TABLE `bookingssheets`
  ADD CONSTRAINT `bookingssheets_ibfk_1` FOREIGN KEY (`bookingId`) REFERENCES `bookings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `screens`
--
ALTER TABLE `screens`
  ADD CONSTRAINT `screens_ibfk_1` FOREIGN KEY (`theatreId`) REFERENCES `theatres` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `shows`
--
ALTER TABLE `shows`
  ADD CONSTRAINT `shows_ibfk_1` FOREIGN KEY (`screenId`) REFERENCES `screens` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `shows_ibfk_2` FOREIGN KEY (`movieId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `theatresheets`
--
ALTER TABLE `theatresheets`
  ADD CONSTRAINT `theatresheets_ibfk_1` FOREIGN KEY (`screenId`) REFERENCES `screens` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
