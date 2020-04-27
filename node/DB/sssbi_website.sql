-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2020 at 09:09 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sssbi_website`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_form`
--

CREATE TABLE `contact_form` (
  `id` int(250) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `ph_no` varchar(250) NOT NULL,
  `message` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact_form`
--

INSERT INTO `contact_form` (`id`, `name`, `email`, `ph_no`, `message`) VALUES
(1, '', '', '', ''),
(2, 'gowtham', 'gowthamireddy245@gmail.com', '8749254', 'test'),
(3, 'gowtham', 'gowthamireddy245@gmail.com', '8749254', 'test'),
(4, 'gowthamiii', 'gowthamireddy245@gmail.com', '8749254', 'test'),
(5, 'gowthamiii', 'gowthamireddy245@gmail.com', '8749254', 'test'),
(6, 'gowthamiii', 'gowthamireddy245@gmail.com', '8749254', 'test'),
(7, 'test', 'hinduharika@gmail.com', '7823732', 'test'),
(8, 'nlkj', 'hindukurakula@gmail.com', '979785646546', 'j'),
(9, 'check', 'hindukurakula@gmail.com', '979785646546', 'j');

-- --------------------------------------------------------

--
-- Table structure for table `job_tbl`
--

CREATE TABLE `job_tbl` (
  `id` int(11) NOT NULL,
  `job_title` varchar(250) NOT NULL,
  `job_location` varchar(250) NOT NULL,
  `job_type` varchar(250) NOT NULL,
  `created_date` date NOT NULL,
  `education` varchar(250) NOT NULL,
  `experience` varchar(250) NOT NULL,
  `job_description` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `job_tbl`
--

INSERT INTO `job_tbl` (`id`, `job_title`, `job_location`, `job_type`, `created_date`, `education`, `experience`, `job_description`) VALUES
(1, 'Technical lead (Any ETL/BI TOOLS)', 'Tirupati/Chennai', 'Full Time', '2020-04-24', 'Any Degree', '2 Years', 'Having good coding skills');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_form`
--
ALTER TABLE `contact_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_tbl`
--
ALTER TABLE `job_tbl`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_form`
--
ALTER TABLE `contact_form`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `job_tbl`
--
ALTER TABLE `job_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
