package com.spring.repository;

import com.spring.models.TableOrder;
import com.spring.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TableOrderRepository extends JpaRepository<TableOrder, Long> {
    TableOrder findById(Integer id);
    List<TableOrder> findByUser(String name);
}
