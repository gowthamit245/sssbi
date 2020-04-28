-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2020 at 08:22 AM
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
-- Table structure for table `apply_job_details`
--

CREATE TABLE `apply_job_details` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `ph_no` varchar(250) NOT NULL,
  `notice_period` varchar(250) NOT NULL,
  `user_status` varchar(250) NOT NULL,
  `resume` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `apply_job_details`
--

INSERT INTO `apply_job_details` (`id`, `name`, `email`, `ph_no`, `notice_period`, `user_status`, `resume`) VALUES
(1, 'undefined', 'undefined', 'undefined', 'undefined', '', ''),
(2, 'undefined', 'undefined', 'undefined', 'undefined', '', ''),
(3, 'undefined', 'undefined', 'undefined', 'undefined', '', ''),
(4, 'undefined', 'undefined', 'undefined', 'undefined', '', ''),
(5, 'undefined', 'undefined', 'undefined', 'undefined', '', ''),
(6, 'undefined', 'undefined', 'undefined', 'undefined', '', ''),
(7, 'gowtham', 'gowthamireddy245@gmail.com', '78883474', '3months', '', ''),
(8, 'gowtham', 'gowthamireddy245@gmail.com', '78883474', '3months', '', 'C:fakepathall_icons.png'),
(9, 'harsha', '', '', '', '', 'C:fakepath24-03-2020.xlsx'),
(10, '', '', '', '', '', 'undefined'),
(11, '', '', '', '', 'Employed', 'undefined');

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
(8, 'leela', 'gowthamiwordpress@gmail.com', '873214344', 'test'),
(9, 'gowtham', 'gowthamireddy245@gmail.com', '763413454', 'test');

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
  `job_description` varchar(250) NOT NULL,
  `job_skills` varchar(250) NOT NULL,
  `status` enum('Active','Inactive','','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `job_tbl`
--

INSERT INTO `job_tbl` (`id`, `job_title`, `job_location`, `job_type`, `created_date`, `education`, `experience`, `job_description`, `job_skills`, `status`) VALUES
(1, 'Technical lead (Any ETL/BI TOOLS)', 'Tirupati/Chennai', 'Part Time', '2020-04-24', 'Any Degree', '2 Years', 'Having good coding skills', '', 'Active'),
(2, 'Jira', 'Tirupati/Chennai', 'Full Time', '2020-04-27', 'Any Graduation', '3 Experiance', 'We are hiring Jira admin', '', 'Active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apply_job_details`
--
ALTER TABLE `apply_job_details`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `apply_job_details`
--
ALTER TABLE `apply_job_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `contact_form`
--
ALTER TABLE `contact_form`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `job_tbl`
--
ALTER TABLE `job_tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
