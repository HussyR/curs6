package com.spring.controllers;

import com.spring.models.TableOrder;
import com.spring.payload.request.TableOrderRequest;
import com.spring.payload.response.MessageResponse;
import com.spring.repository.TableOrderRepository;
import jdk.javadoc.internal.doclets.formats.html.Table;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/tableOrders")
public class TableOrderController {
	private final TableOrderRepository tableOrderRepository;

	public TableOrderController(TableOrderRepository tableOrderRepository) {
		this.tableOrderRepository = tableOrderRepository;
	}

	@GetMapping("/info")
	public String allAccess() {
		return "Клиент-серверное фуллстек-приложение ресторана.";
	}

	@GetMapping
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<List<TableOrder>> getAllTableOrders() {
		return ResponseEntity.ok(tableOrderRepository.findAll());
	}

	@PostMapping
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<?> saveTableOrder(@RequestBody @Valid TableOrderRequest tableOrderRequest) {

		TableOrder tableOrder = new TableOrder();
		tableOrder.setUser(tableOrderRequest.getUserName());
		tableOrder.setTime(tableOrderRequest.getTime());
		tableOrder.setNumberOfPersons(tableOrderRequest.getNumberOfPersons());

		return ResponseEntity.ok(tableOrderRepository.save(tableOrder));
	}

	@PutMapping("/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<?> updateTableOrder(@RequestBody @Valid TableOrderRequest tableOrderRequest,
										@PathVariable Long id) {
		Optional<TableOrder> tableOrderOptional = tableOrderRepository.findById(id);
		TableOrder tableOrder = tableOrderOptional.get();
		tableOrder.setTime(tableOrderRequest.getTime());
		tableOrder.setUser(tableOrderRequest.getUserName());
		tableOrder.setNumberOfPersons(tableOrderRequest.getNumberOfPersons());

		return ResponseEntity.ok(tableOrderRepository.save(tableOrder));
	}

	@DeleteMapping("/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public void deleteTableOrder(@PathVariable Long id) {
		tableOrderRepository.deleteById(id);
	}

	@GetMapping("/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<?> findTableOrderById(@PathVariable Long id) {
		Optional<TableOrder> tableOrderOptional = tableOrderRepository.findById(id);
		return tableOrderOptional.isPresent() ?
				ResponseEntity.ok(tableOrderOptional.get()) :
				ResponseEntity.badRequest().body(new MessageResponse("Error: Такого бронирования не существует"));
	}
}
