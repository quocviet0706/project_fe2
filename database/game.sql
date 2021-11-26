-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2021 at 05:47 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `game`
--

-- --------------------------------------------------------

--
-- Table structure for table `supports`
--

CREATE TABLE `supports` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `type support` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `qty arrows` int(11) NOT NULL,
  `img support` varchar(500) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `supports`
--

INSERT INTO `supports` (`id`, `name`, `type support`, `qty arrows`, `img support`) VALUES
(1, 'viet', 'support name', 23, 'viet.img'),
(2, 'viet', 'support name', 23, 'viet.img');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `point` int(100) NOT NULL,
  `qty support` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `id` int(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `point`, `qty support`, `id`) VALUES
('nguyenquocviet', '$2y$10$xLOyisnGQMWMYf442tFPfuRPJSfHyIN.HEjifHVuRmoVx0jrX9sPG', 0, '', 0),
('viet@mail.com', '202cb962ac59075b964b07152d234b70', 0, '', 0),
('nhu@gmail.com', '$2y$10$I940zNwLA3cd1jJaUTIljut4zlEBYXTBcgopG/iBPj.pHvbVaDqjG', 0, '', 0),
('nam@gmail.com', '$2y$10$Cvtn7gRn0La6AKT9K8rJM.CtMg.ZbqxQ/kOT2sa33eI1n.B50cjai', 0, '', 0),
('', '$2y$10$iM8IsIno1ccEPtK.jZyiUOZAq5l3bHb0mLRBAQ8J4QhdLwNKRNj1a', 0, '', 0),
('pn0921997@gmail.com', '$2y$10$kgC9t5I25rKG5Zaxt66O/O3VS8iZMghrE6gGjhfk8qU5CN.x/oKoG', 0, '', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `supports`
--
ALTER TABLE `supports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `supports`
--
ALTER TABLE `supports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
