class OpstateChangesController < ApplicationController
  before_action :set_opstate_change, only: [:show, :edit, :update, :destroy]

  # GET /opstate_changes
  # GET /opstate_changes.json
  def index
    @opstate_changes = OpstateChange.all
  end

  # GET /opstate_changes/1
  # GET /opstate_changes/1.json
  def show
  end

  # GET /opstate_changes/new
  def new
    @opstate_change = OpstateChange.new
  end

  # GET /opstate_changes/1/edit
  def edit
  end

  # POST /opstate_changes
  # POST /opstate_changes.json
  def create
    @opstate_change = OpstateChange.new(opstate_change_params)

    respond_to do |format|
      if @opstate_change.save
        format.html { redirect_to @opstate_change, notice: 'Opstate change was successfully created.' }
        format.json { render :show, status: :created, location: @opstate_change }
      else
        format.html { render :new }
        format.json { render json: @opstate_change.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /opstate_changes/1
  # PATCH/PUT /opstate_changes/1.json
  def update
    respond_to do |format|
      if @opstate_change.update(opstate_change_params)
        format.html { redirect_to @opstate_change, notice: 'Opstate change was successfully updated.' }
        format.json { render :show, status: :ok, location: @opstate_change }
      else
        format.html { render :edit }
        format.json { render json: @opstate_change.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /opstate_changes/1
  # DELETE /opstate_changes/1.json
  def destroy
    @opstate_change.destroy
    respond_to do |format|
      format.html { redirect_to opstate_changes_url, notice: 'Opstate change was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_opstate_change
      @opstate_change = OpstateChange.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def opstate_change_params
      params.require(:opstate_change).permit(:operation_id, :date, :from_state_id, :to_state_id, :user_references, :note, :deleted_at)
    end
end
