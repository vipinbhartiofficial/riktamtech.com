-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 20, 2024 at 04:48 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `riktamtech`
--

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`, `created_by`, `created_at`, `updated_at`, `updated_by`) VALUES
(1, 'Our Friendship', 1, '2024-03-12 15:19:27', '2024-03-20 18:19:51', 1),
(2, 'Office Trip', 1, '2024-03-12 19:31:23', '2024-03-12 19:31:23', 1),
(3, 'Office Trip', 1, '2024-03-20 18:07:00', '2024-03-20 18:07:00', 1),
(4, 'Office Trip', 1, '2024-03-20 18:08:21', '2024-03-20 18:08:21', 1),
(5, 'Office Trip', 1, '2024-03-20 18:08:33', '2024-03-20 18:08:33', 1),
(6, 'Office Trip', 1, '2024-03-20 18:19:40', '2024-03-20 18:19:40', 1);

-- --------------------------------------------------------

--
-- Table structure for table `group_members`
--

CREATE TABLE `group_members` (
  `id` int(11) NOT NULL,
  `group_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `group_members`
--

INSERT INTO `group_members` (`id`, `group_id`, `user_id`, `roles`, `created_at`, `updated_at`, `created_by`, `updated_by`) VALUES
(1, 1, 1, 'ADMIN', '2024-03-12 15:19:27', '2024-03-12 15:19:27', 1, NULL),
(5, 1, 4, 'NORMAL', '2024-03-12 15:19:27', '2024-03-12 15:19:27', 1, NULL),
(6, 1, 5, 'NORMAL', '2024-03-12 15:19:27', '2024-03-12 15:19:27', 1, NULL),
(14, 1, 3, 'NORMAL', '2024-03-12 19:12:38', '2024-03-12 19:12:38', 1, 1),
(15, 2, 1, 'ADMIN', '2024-03-12 19:31:23', '2024-03-12 19:31:23', 1, 1),
(16, 2, 1, 'NORMAL', '2024-03-12 19:31:23', '2024-03-12 19:31:23', 1, 1),
(17, 2, 8, 'NORMAL', '2024-03-12 19:31:23', '2024-03-12 19:31:23', 1, 1),
(18, 2, 4, 'NORMAL', '2024-03-12 19:31:23', '2024-03-12 19:31:23', 1, 1),
(19, 2, 5, 'NORMAL', '2024-03-12 19:31:23', '2024-03-12 19:31:23', 1, 1),
(20, 3, 1, 'ADMIN', '2024-03-20 18:07:00', '2024-03-20 18:07:00', 1, 1),
(21, 3, 1, 'NORMAL', '2024-03-20 18:07:00', '2024-03-20 18:07:00', 1, 1),
(22, 3, 8, 'NORMAL', '2024-03-20 18:07:00', '2024-03-20 18:07:00', 1, 1),
(23, 3, 4, 'NORMAL', '2024-03-20 18:07:00', '2024-03-20 18:07:00', 1, 1),
(24, 3, 5, 'NORMAL', '2024-03-20 18:07:00', '2024-03-20 18:07:00', 1, 1),
(25, 4, 1, 'ADMIN', '2024-03-20 18:08:21', '2024-03-20 18:08:21', 1, 1),
(26, 4, 1, 'NORMAL', '2024-03-20 18:08:21', '2024-03-20 18:08:21', 1, 1),
(27, 4, 8, 'NORMAL', '2024-03-20 18:08:21', '2024-03-20 18:08:21', 1, 1),
(28, 4, 4, 'NORMAL', '2024-03-20 18:08:21', '2024-03-20 18:08:21', 1, 1),
(29, 4, 5, 'NORMAL', '2024-03-20 18:08:21', '2024-03-20 18:08:21', 1, 1),
(30, 5, 1, 'ADMIN', '2024-03-20 18:08:33', '2024-03-20 18:08:33', 1, 1),
(31, 5, 1, 'NORMAL', '2024-03-20 18:08:33', '2024-03-20 18:08:33', 1, 1),
(32, 5, 8, 'NORMAL', '2024-03-20 18:08:33', '2024-03-20 18:08:33', 1, 1),
(33, 5, 4, 'NORMAL', '2024-03-20 18:08:33', '2024-03-20 18:08:33', 1, 1),
(34, 5, 5, 'NORMAL', '2024-03-20 18:08:33', '2024-03-20 18:08:33', 1, 1),
(35, 6, 1, 'ADMIN', '2024-03-20 18:19:40', '2024-03-20 18:19:40', 1, 1),
(36, 6, 1, 'NORMAL', '2024-03-20 18:19:40', '2024-03-20 18:19:40', 1, 1),
(37, 6, 8, 'NORMAL', '2024-03-20 18:19:40', '2024-03-20 18:19:40', 1, 1),
(38, 6, 4, 'NORMAL', '2024-03-20 18:19:40', '2024-03-20 18:19:40', 1, 1),
(39, 6, 5, 'NORMAL', '2024-03-20 18:19:40', '2024-03-20 18:19:40', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `group_id` int(11) DEFAULT NULL,
  `sender_id` int(11) DEFAULT NULL,
  `messages` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `group_id`, `sender_id`, `messages`, `created_at`, `updated_at`) VALUES
(1, 100, 1, 'Hi', '2024-03-12 20:59:37', '2024-03-12 20:59:37'),
(2, 100, 1, 'Hi', '2024-03-12 21:01:08', '2024-03-12 21:01:08'),
(3, 100, 1, 'Hi', '2024-03-12 21:05:50', '2024-03-12 21:05:50'),
(4, 100, 1, 'Hi', '2024-03-12 21:43:00', '2024-03-12 21:43:00'),
(5, 100, 1, 'Hi', '2024-03-13 07:28:58', '2024-03-13 07:28:58'),
(6, 100, 1, 'Hi', '2024-03-13 11:11:31', '2024-03-13 11:11:31'),
(7, 100, 110, 'Welcome', '2024-03-13 11:18:00', '2024-03-13 11:18:00'),
(8, 100, 110, 'Welcome', '2024-03-13 11:25:12', '2024-03-13 11:25:12'),
(9, 100, 110, 'Welcome', '2024-03-13 11:25:16', '2024-03-13 11:25:16'),
(10, 100, 110, 'Welcome', '2024-03-13 12:10:41', '2024-03-13 12:10:41'),
(11, 100, 110, 'Welcome', '2024-03-13 12:10:42', '2024-03-13 12:10:42'),
(12, 100, 110, 'Welcome', '2024-03-13 12:10:42', '2024-03-13 12:10:42'),
(13, 100, 110, 'Welcome', '2024-03-13 12:30:22', '2024-03-13 12:30:22'),
(14, 100, 110, 'Welcome', '2024-03-13 12:30:38', '2024-03-13 12:30:38'),
(15, NULL, NULL, NULL, '2024-03-20 18:21:47', '2024-03-20 18:21:47'),
(16, NULL, NULL, NULL, '2024-03-20 18:22:09', '2024-03-20 18:22:09'),
(17, NULL, NULL, NULL, '2024-03-20 18:22:10', '2024-03-20 18:22:10');

-- --------------------------------------------------------

--
-- Table structure for table `message_recipients`
--

CREATE TABLE `message_recipients` (
  `id` int(11) NOT NULL,
  `message_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT 1,
  `is_like` tinyint(1) DEFAULT 1,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mobile_no` bigint(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `mobile_no`, `email`, `password`, `roles`, `created_at`, `updated_at`) VALUES
(1, 'Sumit', 7607844710, 'sumit.bharti@gmail.com', '12345678', 'ADMIN', '2024-03-10 21:16:33', '2024-03-10 21:16:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `group_members`
--
ALTER TABLE `group_members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `message_recipients`
--
ALTER TABLE `message_recipients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mobile_no` (`mobile_no`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `mobile_no_2` (`mobile_no`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `mobile_no_3` (`mobile_no`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `mobile_no_4` (`mobile_no`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `mobile_no_5` (`mobile_no`),
  ADD UNIQUE KEY `email_5` (`email`),
  ADD UNIQUE KEY `mobile_no_6` (`mobile_no`),
  ADD UNIQUE KEY `email_6` (`email`),
  ADD UNIQUE KEY `mobile_no_7` (`mobile_no`),
  ADD UNIQUE KEY `email_7` (`email`),
  ADD UNIQUE KEY `mobile_no_8` (`mobile_no`),
  ADD UNIQUE KEY `email_8` (`email`),
  ADD UNIQUE KEY `mobile_no_9` (`mobile_no`),
  ADD UNIQUE KEY `email_9` (`email`),
  ADD UNIQUE KEY `mobile_no_10` (`mobile_no`),
  ADD UNIQUE KEY `email_10` (`email`),
  ADD UNIQUE KEY `mobile_no_11` (`mobile_no`),
  ADD UNIQUE KEY `email_11` (`email`),
  ADD UNIQUE KEY `mobile_no_12` (`mobile_no`),
  ADD UNIQUE KEY `email_12` (`email`),
  ADD UNIQUE KEY `mobile_no_13` (`mobile_no`),
  ADD UNIQUE KEY `email_13` (`email`),
  ADD UNIQUE KEY `mobile_no_14` (`mobile_no`),
  ADD UNIQUE KEY `email_14` (`email`),
  ADD UNIQUE KEY `mobile_no_15` (`mobile_no`),
  ADD UNIQUE KEY `email_15` (`email`),
  ADD UNIQUE KEY `mobile_no_16` (`mobile_no`),
  ADD UNIQUE KEY `email_16` (`email`),
  ADD UNIQUE KEY `mobile_no_17` (`mobile_no`),
  ADD UNIQUE KEY `email_17` (`email`),
  ADD UNIQUE KEY `mobile_no_18` (`mobile_no`),
  ADD UNIQUE KEY `email_18` (`email`),
  ADD UNIQUE KEY `mobile_no_19` (`mobile_no`),
  ADD UNIQUE KEY `email_19` (`email`),
  ADD UNIQUE KEY `mobile_no_20` (`mobile_no`),
  ADD UNIQUE KEY `email_20` (`email`),
  ADD UNIQUE KEY `mobile_no_21` (`mobile_no`),
  ADD UNIQUE KEY `email_21` (`email`),
  ADD UNIQUE KEY `mobile_no_22` (`mobile_no`),
  ADD UNIQUE KEY `email_22` (`email`),
  ADD UNIQUE KEY `mobile_no_23` (`mobile_no`),
  ADD UNIQUE KEY `email_23` (`email`),
  ADD UNIQUE KEY `mobile_no_24` (`mobile_no`),
  ADD UNIQUE KEY `email_24` (`email`),
  ADD UNIQUE KEY `mobile_no_25` (`mobile_no`),
  ADD UNIQUE KEY `email_25` (`email`),
  ADD UNIQUE KEY `mobile_no_26` (`mobile_no`),
  ADD UNIQUE KEY `email_26` (`email`),
  ADD UNIQUE KEY `mobile_no_27` (`mobile_no`),
  ADD UNIQUE KEY `email_27` (`email`),
  ADD UNIQUE KEY `mobile_no_28` (`mobile_no`),
  ADD UNIQUE KEY `email_28` (`email`),
  ADD UNIQUE KEY `mobile_no_29` (`mobile_no`),
  ADD UNIQUE KEY `email_29` (`email`),
  ADD UNIQUE KEY `mobile_no_30` (`mobile_no`),
  ADD UNIQUE KEY `email_30` (`email`),
  ADD UNIQUE KEY `mobile_no_31` (`mobile_no`),
  ADD UNIQUE KEY `email_31` (`email`),
  ADD UNIQUE KEY `mobile_no_32` (`mobile_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `group_members`
--
ALTER TABLE `group_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `message_recipients`
--
ALTER TABLE `message_recipients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
