package com.the_opinion.backend.db.dao;

import com.the_opinion.backend.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findBySidAndDeleteTimeIsNull(Long sid);
}
